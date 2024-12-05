export const drawRect = (detections, ctx) => {
  // Loop through each prediction
  detections.forEach(prediction => {

    // Extract boxes and classes
    const [x, y, width, height] = prediction['bbox']; 
    const text = prediction['class']; 

    // Set styling for the bounding box
    const color = Math.floor(Math.random() * 16777215).toString(16);
    ctx.strokeStyle = '#' + color;
    ctx.font = '18px Arial';

    // Draw the class name text
    ctx.beginPath();   
    ctx.fillStyle = '#' + color;
    ctx.fillText(text, x, y);

    // Draw the bounding box rectangle
    ctx.rect(x, y, width, height); 
    ctx.stroke();

    // Get current date and time
    const now = new Date();
    const time = now.toLocaleString();

    const timeX = x + width - ctx.measureText(time).width; 
    const timeY = y - 5; 
    ctx.fillText(time, timeX, timeY);  
  });
}
