import tensorflow as tf
from tensorflow import keras

import pickle
import numpy as np
import os

converter = tf.lite.TFLiteConverter.from_saved_model('./Saved_model_testing/saved_model.pb') # path to the SavedModel directory
tflite_model = converter.convert()

# Save the model.
with open('model.tflite', 'wb') as f:
  f.write(tflite_model)