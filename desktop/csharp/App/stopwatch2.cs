using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp7
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            TopMost = true;

        }

        private void label1_Click(object sender, EventArgs e)
        {


        }
        private void label1_MouseClick(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Right)
            {
                if (timer1.Enabled == false)
                {
                    timer1.Start();
                    label1.ForeColor = Color.Black;
                }
                else
                {
                    timer1.Stop();
                    label1.ForeColor = Color.Gray;
                }
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

        int second1 = 0;
        int minute1 = 0;
        int hour1 = 0;
        private void timer1_Tick(object sender, EventArgs e)
        {
            timer1.Interval = 1000;
            second1 += 1;

            if (second1 == 60) { minute1 += 1; second1 = 0; }
            if (minute1 == 60) { hour1 += 1; minute1 = 0; }

            string second1String = second1.ToString();
            string minute1String = minute1.ToString();
            string hour1String = hour1.ToString();

            if (second1 < 10) { second1String = "0" + second1String; }
            if (minute1 < 10) { minute1String = "0" + minute1String; }
            if (hour1 < 10) { hour1String = "0" + hour1String; }

            label1.Text = hour1String + ":" + minute1String + ":" + second1String;
        }
        private void label1_DoubleClick(object sender, EventArgs e)
        {

            if (timer1.Enabled == false)
            {
                timer1.Start();
                label1.ForeColor = Color.Black;
            }
            else
            {
                timer1.Stop();
                second1 = 0;
                minute1 = 0;
                hour1 = 0;
                label1.Text = "00:00:00";
                label1.ForeColor = Color.Gray;
            }
        }


    }
}
