export type BarValues = {
  name: string;
  description: string | undefined;
  opened_at_days: string[];
  open_hour: string;
  close_hour: string;
  adress: string;
  zip_code: string;
  number: number;
  complement: string | undefined;
  latitude: number;
  longitude: number;
  userId: number;
};

export type BarPostBodyRequest = {
  name: string;
  description: string | undefined;
  opened_at_days: string[];
  open_hour: string;
  close_hour: string;
  adress: string;
  zip_code: string;
  number: number;
  complement: string | undefined;
  latitude: number;
  longitude: number;
};
