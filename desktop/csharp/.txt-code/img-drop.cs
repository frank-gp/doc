        private void Form1_DragEnter(object sender, DragEventArgs e)
        {
            e.Effect = DragDropEffects.Copy;
        }

        private void Form1_DragDrop(object sender, DragEventArgs e)
        {
            string[] archivo = (string[])e.Data.GetData(DataFormats.FileDrop, false);
            pictureBox1.Image = Image.FromFile(archivo[0]);
            this.Text = archivo[0];
            pictureBox1.SizeMode = PictureBoxSizeMode.Zoom;
        }