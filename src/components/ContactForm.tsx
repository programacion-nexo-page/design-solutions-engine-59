import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    toast({
      title: "Inquiry Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    })
    setFormData({ name: "", company: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Card className="w-full max-w-2xl shadow-card">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-primary">
          Start Your Project
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-foreground">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="transition-smooth focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-foreground">
                Company
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="transition-smooth focus:ring-primary"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="transition-smooth focus:ring-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-foreground">
              Project Details *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="transition-smooth focus:ring-primary resize-none"
              placeholder="Tell us about your engineering challenge..."
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-engineering-gradient hover:shadow-engineering transform hover:scale-105 transition-bounce"
            size="lg"
          >
            Send Inquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}