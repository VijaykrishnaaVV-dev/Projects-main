export interface User {
  id: string;
  name: string;
  email: string;
  // Add other user properties as needed
}

export interface Video {
  id: string;
  title: string;
  url: string;
  // Add other video properties as needed
}

export interface Vendor {
  id: string;
  name: string;
  address: string;
  // Add other vendor properties as needed
}

export interface Order {
  id: string;
  userId: string;
  vendorId: string;
  items: any[]; // Define a more specific type for items later
  totalAmount: number;
  // Add other order properties as needed
}