const Briefing = require('../models/Briefing');

// Função para criar um novo briefing
exports.createBriefing = async (req, res) => {
  try {
    const { id, clientName, description } = req.body;
    const newBriefing = new Briefing({
      id,
      clientName,
      description
    });
    const savedBriefing = await newBriefing.save();
    res.status(201).json(savedBriefing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para listar todos os briefings
exports.getAllBriefings = async (req, res) => {
  try {
    const briefings = await Briefing.find();
    res.status(200).json(briefings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para obter um briefing por ID
exports.getBriefingById = async (req, res) => {
  try {
    const briefing = await Briefing.findById(req.params.id);
    if (!briefing) {
      return res.status(404).json({ message: 'Briefing not found' });
    }
    res.status(200).json(briefing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para atualizar um briefing por ID
exports.updateBriefingById = async (req, res) => {
  try {
    const { clientName, description } = req.body;
    const updatedBriefing = await Briefing.findByIdAndUpdate(req.params.id, { clientName, description }, { new: true });
    if (!updatedBriefing) {
      return res.status(404).json({ message: 'Briefing not found' });
    }
    res.status(200).json(updatedBriefing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para excluir um briefing por ID
exports.deleteBriefingById = async (req, res) => {
  try {
    const deletedBriefing = await Briefing.findByIdAndDelete(req.params.id);
    if (!deletedBriefing) {
      return res.status(404).json({ message: 'Briefing not found' });
    }
    res.status(200).json({ message: 'Briefing deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
