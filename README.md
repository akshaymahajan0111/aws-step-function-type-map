# aws-step-function-type-map
Run a set of steps for each element of an input array in parallel using AWS Step function. In this example to trigger the multiple instances of the lambda function,  we are using state type map. So this iterate over the input array (output of previous state) and pass each array element to separate instance of the lambda resource.
