import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const FeaturedBoard = () => {
  return (
    <div>
       <section className="container py-12">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              <Badge className="absolute left-4 top-4 bg-[#00629B] font-bold">FEATURED</Badge>
              <Image
                src="/placeholder.svg"
                alt="Featured content"
                width={400}
                height={300}
                className="h-[200px] w-full object-cover"
              />
            </div>
            <div className="p-6">
              <CardHeader className="p-0">
                <div className="mb-2 flex gap-2">
                  <Badge variant="outline" className="text-[#00629B]">CONFERENCES</Badge>
                  <Badge variant="outline" className="text-[#00629B]">MEMBERS</Badge>
                </div>
                <CardTitle className="text-lg font-bold text-[#00629B]">
                  Sign Up to Attend Dr. Emily Jones Lecture on Smart Grid Technologies
                </CardTitle>
              </CardHeader>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <Image
              src="/placeholder.svg"
              alt="Conference"
              width={400}
              height={300}
              className="rounded-t-lg object-cover"
            />
            <div className="p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-lg font-semibold">
                  Apply for Travel Grants for
                </CardTitle>
              </CardHeader>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <Image
              src="/placeholder.svg"
              alt="Awards"
              width={400}
              height={300}
              className="rounded-t-lg object-cover"
            />
            <div className="p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-lg font-semibold">
                  6 Chapter Members Honored
                </CardTitle>
              </CardHeader>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
    </div>
  )
}

export default FeaturedBoard
