
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Plus, 
  Eye, 
  Clock, 
  CheckCircle, 
  XCircle,
  DollarSign,
  FileText,
  Bell,
  TrendingUp
} from 'lucide-react';

const Dashboard = () => {
  // Mock data for demonstration
  const claims = [
    {
      id: 'CLM-001',
      type: 'Collision',
      status: 'processing',
      submittedDate: '2024-01-15',
      estimatedAmount: '$3,250',
      aiConfidence: '94%'
    },
    {
      id: 'CLM-002',
      type: 'Comprehensive',
      status: 'approved',
      submittedDate: '2024-01-10',
      estimatedAmount: '$1,850',
      aiConfidence: '98%'
    },
    {
      id: 'CLM-003',
      type: 'Liability',
      status: 'pending',
      submittedDate: '2024-01-08',
      estimatedAmount: '$890',
      aiConfidence: '87%'
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
      rejected: 'claim-status-rejected'
    };
    
    return (
      <Badge className={variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800'}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="insurance-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, John!
              </h1>
              <p className="text-xl text-blue-100">
                Track your claims and manage your insurance needs
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex space-x-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link to="/claim/submit">
                  <Plus className="mr-2 h-4 w-4" />
                  New Claim
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link to="/notifications">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Claims</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  +1 from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Approved Claims</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">
                  33% approval rate
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Payouts</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,850</div>
                <p className="text-xs text-muted-foreground">
                  Processing $4,140 more
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Processing Time</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.3 days</div>
                <p className="text-xs text-muted-foreground">
                  95% faster than industry
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Claims Table */}
          <Card>
            <CardHeader>
              <CardTitle>Your Claims</CardTitle>
              <CardDescription>
                Track the status and progress of all your submitted claims
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                        </div>
                        <p className="text-sm text-gray-500">
                          {claim.type} • Submitted {claim.submittedDate}
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
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
              
              {claims.length === 0 && (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No claims yet</h3>
                  <p className="text-gray-500 mb-4">
                    Submit your first claim to get started with AI-powered processing.
                  </p>
                  <Button asChild>
                    <Link to="/claim/submit">
                      <Plus className="mr-2 h-4 w-4" />
                      Submit Your First Claim
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
