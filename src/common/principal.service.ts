import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PrincipalService<Entidad, CreateDto, UpdateDto> {
  constructor(private _repository: Repository<Entidad>) {
  }

  async createOne(payload: CreateDto): Promise<Entidad> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this._repository.save(payload);
  }

  async createMany(payload: CreateDto[]): Promise<Entidad[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this._repository.save(payload);
  }

  async findById(id: number): Promise<Entidad> {
    const item = await this._repository.findOne(id);
    if (!item) {
      throw new NotFoundException(`Registro ${id} no encontrado`);
    }
    return item;
  }

  async updateById(id: number, payload: UpdateDto): Promise<Entidad> {
    const item = await this.findById(id);
    if (!item) {
      throw new NotFoundException(`Registro ${id} no encontrado`);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await this._repository.merge(item, payload);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this._repository.save(item);
  }

  async deleteOne(id: number): Promise<number> {
    const item = await this.findById(id);
    if (!item) {
      throw new NotFoundException(`Registro ${id} no encontrado`);
    }
    await this._repository.remove(item);
    return id;
  }
}
