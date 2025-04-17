import { Injectable } from '@nestjs/common';
import { Campaign } from './interfaces/campaign.interface';

@Injectable()
export class CampaignsService {
  private readonly campaigns: Campaign[] = [
    {
      id: 1,
      name: 'Summer Sale 2024',
      description: 'Big discounts on summer products',
      startDate: new Date('2024-06-01'),
      endDate: new Date('2024-08-31'),
      status: 'active',
      budget: 5000,
    },
    {
      id: 2,
      name: 'Black Friday 2024',
      description: 'Annual Black Friday campaign',
      startDate: new Date('2024-11-29'),
      endDate: new Date('2024-12-02'),
      status: 'upcoming',
      budget: 10000,
    },
    {
      id: 3,
      name: 'New Year Special 2025',
      description: 'Special offers for New Year',
      startDate: new Date('2024-12-26'),
      endDate: new Date('2025-01-10'),
      status: 'upcoming',
      budget: 7500,
    },
    {
      id: 4,
      name: 'Spring Clearance 2024',
      description: 'Clearance sale for spring items',
      startDate: new Date('2024-04-15'),
      endDate: new Date('2024-04-30'),
      status: 'completed',
      budget: 3000,
    },
    {
      id: 5,
      name: 'Back to School 2024',
      description: 'Deals on school supplies',
      startDate: new Date('2024-08-01'),
      endDate: new Date('2024-09-15'),
      status: 'upcoming',
      budget: 6000,
    },
    {
      id: 6,
      name: 'Holiday Gifting 2024',
      description: 'Find the perfect gifts',
      startDate: new Date('2024-11-01'),
      endDate: new Date('2024-12-24'),
      status: 'upcoming',
      budget: 9000,
    },
    {
      id: 7,
      name: 'Valent\'s Day 2024',
      description: 'Offers for your loved ones',
      startDate: new Date('2024-02-01'),
      endDate: new Date('2024-02-14'),
      status: 'completed',
      budget: 4000,
    },
     {
      id: 8,
      name: 'Easter Specials 2024',
      description: 'Special deals for Easter',
      startDate: new Date('2024-03-20'),
      endDate: new Date('2024-04-05'),
      status: 'completed',
      budget: 3500,
    },
     {
      id: 9,
      name: 'Cyber Monday 2024',
      description: 'Online exclusive deals',
      startDate: new Date('2024-12-02'),
      endDate: new Date('2024-12-03'),
      status: 'upcoming',
      budget: 12000,
    },
     {
      id: 10,
      name: 'End of Year Blowout 2024',
      description: 'Massive discounts before the new year',
      startDate: new Date('2024-12-27'),
      endDate: new Date('2024-12-31'),
      status: 'upcoming',
      budget: 8500,
    }
  ];

  findAll(): Campaign[] {
    return this.campaigns;
  }

  findOne(id: number): Campaign | undefined {
    // Ensure the ID is treated as a number for comparison
    const numericId = Number(id);
    return this.campaigns.find(campaign => campaign.id === numericId);
  }

  // Removed create, update, delete methods
} 