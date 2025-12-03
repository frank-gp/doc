using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp0109._1
{
    public partial class Form1 : Form
    {

        static bool MoveCoordinate;
        static int xCoordinate;
        static int yCoordinate;

        public Form1()
        {
            InitializeComponent();
        }

        private void panel1_MouseDown(object sender, MouseEventArgs e)
        {
            MoveCoordinate = true;
            xCoordinate = e.X;
            yCoordinate = e.Y;
        }

        private void panel1_MouseMove(object sender, MouseEventArgs e)
        {
            if (MoveCoordinate)
            {
                this.SetDesktopLocation(MousePosition.X - xCoordinate, MousePosition.Y - yCoordinate);
            }
        }

        private void panel1_MouseUp(object sender, MouseEventArgs e)
        {
            MoveCoordinate = false;
        }
    }
}
