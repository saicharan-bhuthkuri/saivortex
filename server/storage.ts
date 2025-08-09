import { type User, type InsertUser, type Contact, type InsertContact, type StudentRequest, type InsertStudentRequest } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  createStudentRequest(request: InsertStudentRequest): Promise<StudentRequest>;
  getStudentRequests(): Promise<StudentRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private studentRequests: Map<string, StudentRequest>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.studentRequests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date(),
      phone: insertContact.phone || null,
      service: insertContact.service || null
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createStudentRequest(insertRequest: InsertStudentRequest): Promise<StudentRequest> {
    const id = randomUUID();
    const request: StudentRequest = { ...insertRequest, id, createdAt: new Date() };
    this.studentRequests.set(id, request);
    return request;
  }

  async getStudentRequests(): Promise<StudentRequest[]> {
    return Array.from(this.studentRequests.values());
  }
}

export const storage = new MemStorage();
