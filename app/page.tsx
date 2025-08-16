import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Leaf, Users, Trophy, Camera, TreePine, Recycle, Heart, Star, ArrowRight, Play } from "lucide-react"

export default function EcoSnapHomepage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif font-bold text-xl text-foreground">EcoSnap</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
            <a href="#impact" className="text-muted-foreground hover:text-foreground transition-colors">
              Impact
            </a>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            <Leaf className="w-4 h-4 mr-2" />
            Join the Eco Movement
          </Badge>
          <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
            Snap, Act, <span className="text-primary">Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Turn your daily eco-friendly actions into a rewarding journey. Track your environmental impact, connect with
            like-minded people, and make a real difference for our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Your Eco Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for eco-friendly tips..."
              className="pl-10 py-3 text-lg bg-background border-2"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to start making a positive environmental impact today
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Camera, title: "Snap a Pic", desc: "Capture your eco actions" },
              { icon: Trophy, title: "Get Tips", desc: "Learn sustainable practices" },
              { icon: Star, title: "Earn Points", desc: "Gain rewards for actions" },
              { icon: Users, title: "Share", desc: "Inspire your community" },
              { icon: Heart, title: "Games", desc: "Play eco challenges" },
              { icon: TreePine, title: "Track", desc: "Monitor your progress" },
              { icon: Recycle, title: "Learn", desc: "Discover new habits" },
              { icon: Leaf, title: "Participate", desc: "Join eco events" },
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl text-foreground mb-4">Recent Eco Actions</h2>
            <p className="text-xl text-muted-foreground">See what our community is doing to help the planet</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                user: "snappe Jane",
                action: "planted 3 trees",
                impact: "15kg CO₂ offset",
                image: "/person-planting-trees.png",
              },
              {
                user: "Alex",
                action: "started composting",
                impact: "2kg waste diverted",
                image: "/placeholder-y7s5p.png",
              },
              {
                user: "Maria",
                action: "switched to solar",
                impact: "50kg CO₂ saved monthly",
                image: "/house-with-solar-panels.png",
              },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`${item.user} ${item.action}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">{item.user.charAt(0).toUpperCase()}</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{item.user}</CardTitle>
                      <CardDescription>{item.action}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-xs">
                    <Leaf className="w-3 h-3 mr-1" />
                    {item.impact}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">Every small action counts! 🌱</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Today */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-serif font-bold text-4xl text-foreground mb-6">Join Us Today</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to make a difference? Start your eco journey and connect with thousands of environmentally conscious
            individuals making real change.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Users, title: "Eco Community", desc: "Connect with others" },
              { icon: Recycle, title: "Sustainable Living", desc: "Learn green habits" },
              { icon: TreePine, title: "Green Initiatives", desc: "Join local projects" },
              { icon: Heart, title: "Eco Events", desc: "Attend gatherings" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <Button size="lg" className="text-lg px-12 py-6">
            Start Your Eco Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-serif font-bold text-xl">EcoS</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making environmental action accessible, rewarding, and social.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms Of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">Copyright © 2023 EcoSnap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
