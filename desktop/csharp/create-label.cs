using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp3
{
    public partial class Form1 : Form
    {
        private bool isDragging = false;
        private Point lastMousePosition;
        public Form1()
        {
            InitializeComponent();
            this.Size = new Size(200, 100);
            this.FormBorderStyle = FormBorderStyle.None;
            InitializeCenteredLabel();
        }

        private void InitializeCenteredLabel()
        {
            Label draggableLabel = new Label();
            draggableLabel.Text = "00:00:00";
            draggableLabel.Font = new Font("Arial", 25);
            draggableLabel.TextAlign = ContentAlignment.MiddleCenter;
            draggableLabel.Dock = DockStyle.Fill;
            draggableLabel.MouseClick += CenteredLabel_MouseClick;

            draggableLabel.MouseDown += Form1_MouseDown;
            draggableLabel.MouseMove += Form1_MouseMove;
            draggableLabel.MouseUp += Form1_MouseUp;
            Controls.Add(draggableLabel);

        }
        private void CenteredLabel_MouseClick(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Right)
            {
                Close();
            }
        }

        private void Form1_MouseDown(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                isDragging = true;
                lastMousePosition = e.Location;
            }
        }

        private void Form1_MouseMove(object sender, MouseEventArgs e)
        {
            if (isDragging)
            {
                int deltaX = e.X - lastMousePosition.X;
                int deltaY = e.Y - lastMousePosition.Y;

                Location = new Point(Location.X + deltaX, Location.Y + deltaY);
            }

        }

        private void Form1_MouseUp(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                isDragging = false;
            }
        }
    }
}
