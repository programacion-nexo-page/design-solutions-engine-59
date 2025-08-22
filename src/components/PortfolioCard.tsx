import { Card, CardContent } from "@/components/ui/card"

interface PortfolioCardProps {
  image: string
  title: string
  description: string
}

export function PortfolioCard({ image, title, description }: PortfolioCardProps) {
  return (
    <Card className="group overflow-hidden transition-smooth hover:shadow-card hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-smooth group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-lg font-semibold text-primary">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}