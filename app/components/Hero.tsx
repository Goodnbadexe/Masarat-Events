import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-[#0a0a0a] text-[#f5f5f5] py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover elegance with Masarat Events
        </h1>
        <p className="text-xl mb-8">
          Where simplicity meets sophistication
        </p>
        <Button className="bg-[#8b793c] hover:bg-[#8b793c]/80 text-[#f5f5f5]">
          Plan Your Event
        </Button>
      </div>
    </section>
  )
}

