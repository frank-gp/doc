using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //string rootPath = @"D:\06-C-sharp\temp";
            //string[] dirs = Directory.GetDirectories(rootPath, "*", SearchOption.AllDirectories);

            //foreach (string dir in dirs)
            //{
            //    Console.WriteLine(dir);
            //}

            //var files = Directory.GetFiles(rootPath, "*.*", SearchOption.TopDirectoryOnly);
            //var files = Directory.GetFiles(rootPath, "*.*", SearchOption.AllDirectories);

            //foreach (string file in files)
            //{
            //    //Console.WriteLine(file);
            //    //Console.WriteLine(Path.GetFileName(file));
            //    //Console.WriteLine(Path.GetFileNameWithoutExtension(file));
            //    //Console.WriteLine(Path.GetFullPath(file));
            //    //Console.WriteLine(Path.GetDirectoryName(file));
            //    var info = new FileInfo(file);
            //    //Console.WriteLine(info.Length);
            //    //Console.WriteLine(info.FullName);
            //    Console.WriteLine($"{Path.GetFileName(file)} : {info.Length} bytes");
            //}



            //==========  ==========
            //string newPath = @"D:\06-C-sharp\temp\folderE";
            //Directory.CreateDirectory(newPath);
            //bool directoryExists = Directory.Exists(newPath);

            //if(directoryExists)
            //{
            //    Console.WriteLine("the Directory Exist");
            //}
            //else
            //{
            //    Console.WriteLine("the Directory does not Exist");
            //    Console.WriteLine("Creating directory...");
            //    Directory.CreateDirectory(newPath);
            //}

            //Console.ReadLine();


            //==========  ==========
            //string rootPath = @"D:\06-C-sharp\temp";
            //string[] files = Directory.GetFiles(rootPath);
            //string destinationFolder = @"D:\06-C-sharp\temp\destination\";

            //foreach (string file in files)
            //{
            //    Console.WriteLine("copy to destination");
            //    File.Copy(file, $"{destinationFolder}{Path.GetFileName(file)}", true);
            //}

            //for(int i = 0; i < files.Length; i++)
            //{
            //    //File.Copy(files[i], $"{destinationFolder}{i}.txt", true);
            //    File.Copy(files[i], $"{destinationFolder}{i}.txt", false);
            //}

            //foreach (string file in files)
            //{
            //    Console.WriteLine("Move to destination");
            //    File.Move(file, $"{destinationFolder}{Path.GetFileName(file)}");
            //}

            // ==========  ==========
            string rootPath = @"D:\06-C-sharp\temp";
            //var files = Directory.GetFiles(rootPath, "*.rar", SearchOption.AllDirectories);
            var files = Directory.GetFiles(rootPath, "*1*.*", SearchOption.AllDirectories);
            foreach ( string file in files)
            {
                if (File.Exists(file))
                {
                    Console.WriteLine(file);
                }
            }


            Console.ReadLine();
        }
    }
}
