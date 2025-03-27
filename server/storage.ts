import { users, type User, type InsertUser } from "@shared/schema";
import { bookings, type Booking, type InsertBooking } from "@shared/schema";
import { contacts, type Contact, type InsertContact } from "@shared/schema";

// Extend the interface with all CRUD methods needed
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Booking methods
  getBooking(id: number): Promise<Booking | undefined>;
  getAllBookings(): Promise<Booking[]>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  
  // Contact methods
  getContact(id: number): Promise<Contact | undefined>;
  getAllContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private bookings: Map<number, Booking>;
  private contacts: Map<number, Contact>;
  private userCurrentId: number;
  private bookingCurrentId: number;
  private contactCurrentId: number;

  constructor() {
    this.users = new Map();
    this.bookings = new Map();
    this.contacts = new Map();
    this.userCurrentId = 1;
    this.bookingCurrentId = 1;
    this.contactCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Booking methods
  async getBooking(id: number): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }
  
  async getAllBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }
  
  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.bookingCurrentId++;
    const createdAt = new Date();
    const booking: Booking = { ...insertBooking, id, createdAt };
    this.bookings.set(id, booking);
    return booking;
  }
  
  // Contact methods
  async getContact(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }
  
  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
  
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactCurrentId++;
    const createdAt = new Date();
    const contact: Contact = { ...insertContact, id, createdAt };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
