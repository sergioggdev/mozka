let synaptic = require('synaptic');
let Layer = synaptic.Layer;
let Network = synaptic.Network;
let Trainer = synaptic.Trainer;
let Architect = synaptic.Architect;


function Perceptron(input, hidden, output)
{
	// create the layers
	var inputLayer = new synaptic.Layer(input);
	var hiddenLayer = new synaptic.Layer(hidden);
	var outputLayer = new synaptic.Layer(output);

	// connect the layers
	inputLayer.project(hiddenLayer);
	hiddenLayer.project(outputLayer);

	// set the layers
	this.set({
		input: inputLayer,
		hidden: [hiddenLayer],
		output: outputLayer
	});
}

// extend the prototype chain
Perceptron.prototype = new synaptic.Network();
Perceptron.prototype.constructor = Perceptron;


var myPerceptron = new Perceptron(2,3,1);
var myTrainer = new Trainer(myPerceptron);
console.log(myPerceptron);

myTrainer.XOR(); // { error: 0.004998819355993572, iterations: 21871, time: 356 }

myPerceptron.activate([0,0]); // 0.0268581547421616
myPerceptron.activate([1,0]); // 0.9829673642853368
myPerceptron.activate([0,1]); // 0.9831714267395621
myPerceptron.activate([1,1]); // 0.02128894618097928

