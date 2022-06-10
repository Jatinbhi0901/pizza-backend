const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    size: {
        regular: {
            crust: {
                newHandTossed: {
                    regularNewHandPrice: {
                        type: Number,
                        required: true
                    }
                },
                cheeseBurst: {
                    regularCheeseBurstPrice: {
                        type: Number,
                        required: true
                    }
                },
                freshPan: {
                    regularFreshPanPrice: {
                        type: Number,
                        required: true
                    }
                }
            }

        },
        medium: {
            crust: {
                newHandTossed: {
                    mediumNewHandPrice: {
                        type: Number,
                        required: true
                    }
                },
                cheeseBurst: {
                    mediumCheeseBurstPrice: {
                        type: Number,
                        required: true
                    }
                },
                freshPan: {
                    mediumFreshPanPrice: {
                        type: Number,
                        required: true
                    }
                }
            }

        },
        large: {
            crust: {
                newHandTossed: {
                    largeNewHandPrice: {
                        type: Number,
                        required: true
                    }
                },
                cheeseBurst: {
                    largeCheeseBurstPrice: {
                        type: Number,
                        required: true
                    }
                },
                freshPan: {
                    largeFreshPanPrice: {
                        type: Number,
                        required: true
                    }
                }
            }

        }
    }

});

module.exports = mongoose.model('pizzaData', pizzaSchema);
