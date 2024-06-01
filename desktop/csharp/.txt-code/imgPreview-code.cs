using System;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void closeToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void openFileToolStripMenuItem_Click(object sender, EventArgs e)
        {
            // Show the Open File dialog. If the user clicks OK, load the
            // picture that the user chose.
            if (openFileDialog1.ShowDialog() == DialogResult.OK)
            {
                pictureBox1.Load(openFileDialog1.FileName);
            }
            pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;

        }
        bool movePosition;
        int xCoordinate;
        int yCoordinate;
        private void Form1_MouseDown(object sender, MouseEventArgs e)
        {
            movePosition = true;
            xCoordinate = e.X;
            yCoordinate = e.Y;
        }

        private void Form1_MouseMove(object sender, MouseEventArgs e)
        {
            if (movePosition)
            {
                this.SetDesktopLocation(MousePosition.X - xCoordinate, MousePosition.Y - yCoordinate);
            }
        }

        private void Form1_MouseUp(object sender, MouseEventArgs e)
        {
            movePosition = false;
        }

        private void Form1_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Escape)
            {
                //FormBorderStyle = FormBorderStyle.Sizable;
                WindowState = FormWindowState.Normal;
                WindowState = FormWindowState.Minimized;
                TopMost = false;

            }
        }
        private void pictureBox1_Click(object sender, EventArgs e)
        {
            //FormBorderStyle = FormBorderStyle.Sizable;
            WindowState = FormWindowState.Normal;
            //TopMost = false;
        }
        private void pictureBox1_DoubleClick(object sender, EventArgs e)
        {

            FormBorderStyle = FormBorderStyle.None;
            WindowState = FormWindowState.Maximized;
            TopMost = true;

        }

        private void showBarTitleToolStripMenuItem_Click(object sender, EventArgs e)
        {
            FormBorderStyle = FormBorderStyle.Sizable;
        }

        private void hideToolStripMenuItem_Click(object sender, EventArgs e)
        {
            FormBorderStyle = FormBorderStyle.None;
        }

        private void topMostToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TopMost = true;
        }

        private void falseToolStripMenuItem_Click(object sender, EventArgs e)
        {
            TopMost = false;
        }

        private void fullScreenToolStripMenuItem_Click(object sender, EventArgs e)
        {
            FormBorderStyle = FormBorderStyle.None;
            WindowState = FormWindowState.Maximized;
            TopMost = true;
        }

        private void minimizeToolStripMenuItem_Click(object sender, EventArgs e)
        {
            WindowState = FormWindowState.Minimized;
        }

        private void clearToolStripMenuItem_Click(object sender, EventArgs e)
        {
            pictureBox1.Image = null;

        }
    }
}
