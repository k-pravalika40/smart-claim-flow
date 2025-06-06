
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Search,
  Filter,
  Users,
  FileText,
  DollarSign,
  TrendingUp,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Brain,
  Settings
} from 'lucide-react';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data for demonstration
  const claims = [
    {
      id: 'CLM-001',
      customerName: 'John Doe',
      type: 'Collision',
      status: 'processing',
      submittedDate: '2024-01-15',
      estimatedAmount: '$3,250',
      aiConfidence: '94%',
      fraudRisk: 'Low'
    },
    {
      id: 'CLM-002',
      customerName: 'Jane Smith',
      type: 'Comprehensive',
      status: 'approved',
      submittedDate: '2024-01-14',
      estimatedAmount: '$1,850',
      aiConfidence: '98%',
      fraudRisk: 'Very Low'
    },
    {
      id: 'CLM-003',
      customerName: 'Mike Johnson',
      type: 'Liability',
      status: 'review_required',
      submittedDate: '2024-01-13',
      estimatedAmount: '$890',
      aiConfidence: '67%',
      fraudRisk: 'Medium'
    },
    {
      id: 'CLM-004',
      customerName: 'Sarah Wilson',
      type: 'Collision',
      status: 'pending',
      submittedDate: '2024-01-12',
      estimatedAmount: '$4,200',
      aiConfidence: '89%',
      fraudRisk: 'Low'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'review_required':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      approved: 'claim-status-approved',
      processing: 'claim-status-processing',
      pending: 'claim-status-pending',
      review_required: 'bg-orange-100 text-orange-800 border-orange-200',
      rejected: 'claim-status-rejected'
    };
    
    return (
      <Badge className={variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800'}>
        {status.replace('_', ' ').charAt(0).toUpperCase() + status.replace('_', ' ').slice(1)}
      </Badge>
    );
  };

  const getFraudRiskBadge = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'very low':
        return <Badge className="bg-green-100 text-green-800">Very Low</Badge>;
      case 'low':
        return <Badge className="bg-blue-100 text-blue-800">Low</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
      case 'high':
        return <Badge className="bg-red-100 text-red-800">High</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{risk}</Badge>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="insurance-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Admin Dashboard
              </h1>
              <p className="text-xl text-blue-100">
                Manage claims, monitor AI performance, and oversee operations
              </p>
            </div>
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              <Settings className="mr-2 h-4 w-4" />
              System Settings
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="claims">Claims Management</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="ai-performance">AI Performance</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Claims</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last month
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Processing Time</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2.3 days</div>
                    <p className="text-xs text-muted-foreground">
                      95% faster than industry avg
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Payouts</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2.4M</div>
                    <p className="text-xs text-muted-foreground">
                      +8% from last month
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">AI Accuracy</CardTitle>
                    <Brain className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">94.7%</div>
                    <p className="text-xs text-muted-foreground">
                      +2.1% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Claims */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Claims Requiring Attention</CardTitle>
                  <CardDescription>
                    Claims that need manual review or have high fraud risk
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {claims.filter(claim => claim.status === 'review_required' || claim.fraudRisk === 'Medium').map((claim) => (
                      <div
                        key={claim.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          {getStatusIcon(claim.status)}
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{claim.id}</span>
                              {getStatusBadge(claim.status)}
                              {getFraudRiskBadge(claim.fraudRisk)}
                            </div>
                            <p className="text-sm text-gray-500">
                              {claim.customerName} • {claim.type} • {claim.submittedDate}
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="font-medium">{claim.estimatedAmount}</div>
                          <div className="text-sm text-gray-500">
                            AI Confidence: {claim.aiConfidence}
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          Review
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="claims" className="space-y-6">
              {/* Filters */}
              <Card>
                <CardHeader>
                  <CardTitle>Claims Management</CardTitle>
                  <CardDescription>
                    Search, filter, and manage all insurance claims
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search claims by ID, customer name, or type..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="review_required">Review Required</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Claims Table */}
                  <div className="space-y-4">
                    {claims.map((claim) => (
                      <div
                        key={claim.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          {getStatusIcon(claim.status)}
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{claim.id}</span>
                              {getStatusBadge(claim.status)}
                              {getFraudRiskBadge(claim.fraudRisk)}
                            </div>
                            <p className="text-sm text-gray-500">
                              {claim.customerName} • {claim.type} • {claim.submittedDate}
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="font-medium">{claim.estimatedAmount}</div>
                          <div className="text-sm text-gray-500">
                            AI Confidence: {claim.aiConfidence}
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Button>
                          {claim.status === 'review_required' && (
                            <>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                Approve
                              </Button>
                              <Button variant="destructive" size="sm">
                                Reject
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Claims by Type</CardTitle>
                    <CardDescription>
                      Distribution of claim types this month
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Collision</span>
                        <span className="font-medium">45%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Comprehensive</span>
                        <span className="font-medium">30%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Liability</span>
                        <span className="font-medium">20%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Uninsured Motorist</span>
                        <span className="font-medium">5%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Processing Metrics</CardTitle>
                    <CardDescription>
                      Key performance indicators
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Average Processing Time</span>
                        <span className="font-medium">2.3 days</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Auto-Approval Rate</span>
                        <span className="font-medium">78%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Customer Satisfaction</span>
                        <span className="font-medium">94.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Cost Savings</span>
                        <span className="font-medium">$1.2M/month</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="ai-performance" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Model Performance</CardTitle>
                    <CardDescription>
                      Current AI model accuracy and confidence metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Overall Accuracy</span>
                        <span className="font-medium text-green-600">94.7%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Fraud Detection Rate</span>
                        <span className="font-medium text-green-600">97.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Damage Assessment</span>
                        <span className="font-medium text-green-600">92.1%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Settlement Prediction</span>
                        <span className="font-medium text-yellow-600">88.4%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Model Training Status</CardTitle>
                    <CardDescription>
                      AI model updates and improvements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Last Model Update</span>
                        <span className="font-medium">2 days ago</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Training Data Points</span>
                        <span className="font-medium">847,392</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Next Scheduled Update</span>
                        <span className="font-medium">In 5 days</span>
                      </div>
                      <Button className="w-full">
                        <Brain className="mr-2 h-4 w-4" />
                        Trigger Manual Training
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
