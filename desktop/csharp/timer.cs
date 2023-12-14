// Hacer un Crónometro en C#. Paso a paso
// https://youtu.be/MdR7UZ3qdqE

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace cronometro1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            button1.Text = "Start";
            button2.Text = "Pause";
            label1.Text = "00:00:00";
            timer1.Interval = 1000;

            button1.Size = new System.Drawing.Size(100, 50);
            button2.Size = new System.Drawing.Size(100, 50);

        }
        /*
        Colors:
        Start: Forest Green
        Pause: Royal Blue
        Restart: FireBrick
        Continue: Dark Orange
         */

        int seg;
        int min;
        int hor;


        private void button1_Click(object sender, EventArgs e)
        {
            if (button1.Text == "Start")
            {
                timer1.Start();
                button1.ForeColor = Color.Firebrick;
                button2.Enabled = true;
                button1.Text = "Restart";
            }
            else
            {
                timer1.Stop();
                seg = 0;
                min = 0;
                hor = 0;
                label1.Text = "00:00:00";
                button1.ForeColor = Color.ForestGreen;
                button2.Enabled = false;
                button2.ForeColor = Color.RoyalBlue;
                button2.Text = "Pause";
                button1.Text = "Start";
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (button2.Text == "Pause")
            {
                timer1.Stop();
                button2.ForeColor = Color.DarkOrange;
                button2.Text = "Continue";
            }
            else
            {
                timer1.Start();
                button2.ForeColor = Color.RoyalBlue;
                button2.Text = "Pause";
            }
        }

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
            if (label1.Text == "00:00:00")
            {
                timer1.Start();

            }
            else
            {
                timer1.Stop();
                seg = 0;
                min = 0;
                hor = 0;
            }
        }
    }
}
