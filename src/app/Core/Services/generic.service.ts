import { HttpClient } from '@angular/common/http';

export abstract class GenericService<TEntity, TId> {
  protected URL: string = 'https://localhost:7277/api/';
  constructor(path: string, protected httpClient: HttpClient) {
    this.URL += path;
  }

  getAll() {
    return this.httpClient.get<TEntity[]>(this.URL);
  }

  getById(id: TId) {
    return this.httpClient.get<TEntity>(`${this.URL}/${id}`);
  }

  Add(entity: any) {
    return this.httpClient.post(`${this.URL}`, entity, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  Update(id: TId, entity: any) {
    return this.httpClient.put(`${this.URL}/${id}`, entity, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  delete(id: TId) {
    return this.httpClient.delete(`${this.URL}/${id}`);
  }
}
