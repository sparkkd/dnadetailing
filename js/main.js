document.getElementById('y').textContent = new Date().getFullYear();

MotionEngine.ready();

livingPipeline(document.getElementById('flow'), {
  theme: 'light',
  accent: '#C9A227',
  nodes: [
    { id: 'wash', x: 110, y: 280, label: 'Wash' },
    { id: 'decon', x: 380, y: 280, label: 'Decontaminate' },
    { id: 'correct', x: 650, y: 280, label: 'Correct' },
    { id: 'coat', x: 880, y: 280, label: 'Ceramic coat', big: true }
  ],
  route: ['wash', 'decon', 'correct', 'coat'],
  rounds: ['Paint correction', 'Ceramic protection']
});
