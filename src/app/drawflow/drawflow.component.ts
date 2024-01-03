import { AfterViewInit, Component, OnInit } from '@angular/core';
import Drawflow from 'drawflow';

@Component({
  selector: 'app-drawflow',
  standalone: true,
  imports: [],
  templateUrl: './drawflow.component.html',
  styleUrl: '/src/styles.css'
})

export class DrawflowComponent implements OnInit, AfterViewInit {
  private drawflow: any;

  ngAfterViewInit() {
    // Get the container element by its ID
    const container = document.getElementById('drawflow-container');
    
    if (container) {
      // Initialize Drawflow with the container element
      this.drawflow = new Drawflow(container);

      // Setup Drawflow configuration
      const config = {
        drawflow: {
          useuuid: true, // Use UUID for node IDs
          rmargin: 0,    
          lmargin: 0,    
          tmargin: 0,    
          bmargin: 0,    
        },
        toolbar: {
          left: 200,     // Set the left position of the toolbar
          top: 50,       // Set the top position of the toolbar
        },
        
      };

      // Set the configuration
      this.drawflow.start(config);

      // Listen for the 'node-created' event
      this.drawflow.on('node-created', (node: any) => {
        console.log('Node Created:', node);
      });
     
    }
  }

  ngOnInit(): void {
    if (this.drawflow) {
      // Add a sample node to the canvas
      const sampleNode = {
        id: 'sample-node',
        name: 'Sample Node',
        data: { label: 'Sample Node' },
        class: 'sample-node',
        html: '<div class="sample-node-content">Sample Node</div>',
        inputs: [{ name: 'input_1', type: 1 }],
        outputs: [{ name: 'output_1', type: 1 }],
        typenode: false,
      };
  
      this.drawflow.addNode('sample-node', 'sample-node', 100, 100, sampleNode);
    }
  }
}