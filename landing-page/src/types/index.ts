export type Article = {
  title: string;
  body: string;
  photo: string;
};

export type Testimonial = {
  name: string;
  avatar: string;
  career: string;
  body: string;
  stars: number[];
};

export type TeamMember = {
  name: string;
  body: string;
  avatar: string;
};
export type Work = {
  title: string;
  body: string;
  src: string;
};

export type Plan = {
  price: number;
  duration: string;
  typeSupport: string;
  icon: string;
  details: {
    hdd: number;
    email: number;
    subdomain: number;
    database: number;
  };
};

export type VideoDetail = {
  title: string;
  minute: string;
};
