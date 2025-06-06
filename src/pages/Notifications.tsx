
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, 
  Bell, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Info,
  Trash2
} from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Claim CLM-002 Approved',
      message: 'Your comprehensive claim has been approved for $1,850. Settlement will be processed within 3-5 business days.',
      timestamp: '2 hours ago',
      isRead: false
    },
    {
      id: 2,
      type: 'info',
      title: 'AI Analysis Complete',
      message: 'Claim CLM-001 has been analyzed by our AI system. Confidence score: 94%. Processing to final review.',
      timestamp: '4 hours ago',
      isRead: false
    },
    {
      id: 3,
      type: 'warning',
      title: 'Additional Information Required',
      message: 'Claim CLM-003 needs additional documentation. Please upload a police report to continue processing.',
      timestamp: '1 day ago',
      isRead: true
    },
    {
      id: 4,
      type: 'info',
      title: 'New Feature: Real-time Updates',
      message: 'You can now track your claims in real-time with our enhanced dashboard. Check it out!',
      timestamp: '2 days ago',
      isRead: true
    },
    {
      id: 5,
      type: 'success',
      title: 'Account Verified',
      message: 'Your account has been successfully verified. You can now submit claims and access all features.',
      timestamp: '3 days ago',
      isRead: true
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getNotificationBadge = (type: string) => {
    switch (type) {
      case 'success':
        return <Badge className="bg-green-100 text-green-800">Success</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-100 text-yellow-800">Action Required</Badge>;
      case 'info':
        return <Badge className="bg-blue-100 text-blue-800">Info</Badge>;
      default:
        return <Badge>Notification</Badge>;
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="insurance-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Notifications
              </h1>
              <p className="text-xl text-blue-100">
                Stay updated on your claims and account activity
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {unreadCount > 0 && (
                <Badge className="bg-white text-blue-600">
                  {unreadCount} unread
                </Badge>
              )}
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link to="/dashboard">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Notifications Content */}
      <section className="py-12 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
            <Button variant="outline" size="sm">
              Mark all as read
            </Button>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={`transition-all hover:shadow-md ${
                  !notification.isRead 
                    ? 'border-l-4 border-l-primary bg-blue-50/50' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 pt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {notification.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          {getNotificationBadge(notification.type)}
                          {!notification.isRead && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-3">
                        {notification.message}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{notification.timestamp}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {!notification.isRead && (
                            <Button variant="outline" size="sm">
                              Mark as read
                            </Button>
                          )}
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {notifications.length === 0 && (
            <Card>
              <CardContent className="text-center py-12">
                <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No notifications yet
                </h3>
                <p className="text-gray-500 mb-4">
                  You'll receive notifications about your claims and account updates here.
                </p>
                <Button asChild>
                  <Link to="/claim/submit">Submit a claim to get started</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Notifications;
