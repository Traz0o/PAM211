/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package primerparcial.iniciopam;

/**
 *
 * @author alant
 */


import java.awt.BorderLayout;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JButton;
import javax.swing.JPanel;
import javax.swing.JOptionPane;


public class InicioPAM extends JFrame{
    private JButton reglamento, classroom, fechas, porcentajes;
    private JPanel panelBotones;
    private JLabel cabecera;
    
     public InicioPAM(){ //constructor sin argumentos
      super("Actividad No.2");
      setLayout(new BorderLayout());
      panelBotones= new JPanel();
      panelBotones.setLayout(new GridLayout(4,4));
      cabecera = new JLabel("\n Información");
      cabecera.setFont(new Font("Serif",Font.BOLD,32));
      add(cabecera,BorderLayout.NORTH);

      
      reglamento = new JButton("Reglamento de Poo");
      
      classroom = new JButton("Lineamientos de Classroom");
      
      fechas = new JButton("Fechas de Parciles");
      
      porcentajes = new JButton("Porcentajes de Parciales");
      
      panelBotones.add(reglamento);
      panelBotones.add(classroom);
      panelBotones.add(fechas);
      panelBotones.add(porcentajes);
      
      add(panelBotones, BorderLayout.CENTER);
      
       ManejadorBoton manejador =new ManejadorBoton();
       
       reglamento.addActionListener(manejador);
       classroom.addActionListener(manejador);
       fechas.addActionListener(manejador);
       porcentajes.addActionListener(manejador);
      
      
     }
     
     private class ManejadorBoton implements ActionListener{
        public void actionPerformed(ActionEvent e) {
            if(e.getSource() == reglamento){
                System.println("Reglamento: ");
            }else if(e.getSource()==classroom){
                JOptionPane.showMessageDialog("Lineamientos de classroom");
            }
     
     }
    
}
}
