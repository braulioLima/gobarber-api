import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const { id, url } = await File.create({
      name,
      path,
    });

    return res.status(201).json({
      id,
      name,
      path,
      url,
    });
  }
}

export default new FileController();
