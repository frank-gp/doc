using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp4
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            TopMost = true;
            timer1.Interval = 1000;
            label1.ForeColor = Color.Gray;
            label1.BackColor = Color.White;

            this.TransparencyKey = Color.LimeGreen;
            this.BackColor = Color.LimeGreen;
        }

        int seg;
        int min;
        int hor;
        private void timer1_Tick(object sender, EventArgs e)
        {
            seg += 1;

            string seconds1 = seg.ToString();
            string minutes1 = min.ToString();
            string hours1 = hor.ToString();

            if (seg == 60) { min += 60; seg = 0; }
            if (min == 60) { hor += 60; min = 0; }

            if (seg < 10) { seconds1 = "0" + seg.ToString(); }
            if (min < 10) { minutes1 = "0" + min.ToString(); }
            if (hor < 10) { hours1 = "0" + hor.ToString(); }

            label1.Text = hours1 + ":" + minutes1 + ":" + seconds1;
        }

        private void label1_Click(object sender, EventArgs e)
        {
            if (timer1.Enabled == false)
            {
                timer1.Start();
                label1.ForeColor = Color.Black;
                label1.BackColor = Color.White;
            }
            else
            {
                timer1.Stop();
                label1.ForeColor = Color.Gray;
                label1.BackColor = Color.White;
            }
        }

        private void label1_DoubleClick(object sender, EventArgs e)
        {
            timer1.Stop();
            seg = 0;
            min = 0;
            hor = 0;
            label1.Text = "00:00:00";
            label1.ForeColor = Color.Gray;
            label1.BackColor = Color.White;
        }

        private void label1_MouseClick(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Right)
            {
                Close();
            }
        }
        private bool isDragging = false;
        private Point lastMousePosition;

        private void label1_MouseDown(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                isDragging = true;
                lastMousePosition = e.Location;
            }
        }

        private void label1_MouseMove(object sender, MouseEventArgs e)
        {
            if (isDragging)
            {
                int deltaX = e.X - lastMousePosition.X;
                int deltaY = e.Y - lastMousePosition.Y;

                Location = new Point(Location.X + deltaX, Location.Y + deltaY);
            }
        }

        private void label1_MouseUp(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                isDragging = false;
            }
        }
    }
}
