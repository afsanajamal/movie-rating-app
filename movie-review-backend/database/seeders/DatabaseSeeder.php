<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // \App\Models\Movie::factory(10)->create();
        $title_list = ['Avengers', 'All of us Dead', 'Doctor Strange', 'Batman', 'Money-heist', 'Ms Marvel', 'Underground 6', 'Uncharted', 'X-Men'];
        $release = [ 2018, 2019,2016, 2018, 2019,2018, 2019,2016, 2018 ];
        $poster = ['avengers.jpg', 'dead.jpg', 'doctor-strange-2.jpg', 'batman.webp', 'money-heist.jpg', 'ms marvel.webp', 'underground.jpg', 'uncharted.jpg', 'x-men.jpg'];
        $demodescription = 'Just because we know where a movie is going does not mean we don’t enjoy getting there. That’s especially true when it has a solid script and a two-time Oscar-winner in a role with three key elements beloved by audiences: she’s a mess, she pulls herself together when she finds a heartbreaking story everyone else thinks is hopeless, and she somehow manages to triumph over the most daunting of obstacles. ';
        $genre = ['action', 'drama', 'comedy','action', 'drama', 'comedy','action', 'drama', 'comedy'];
        $average_rating = [4,5,4,4,3,4,5,4,3];
        $total_rating = [29, 34, 56, 45,78,34,25, 90, 70];
        
        foreach($title_list as $key => $value) {
            \App\Models\Movie::create([
                'title' => $title_list[$key],
                'release_year' => $release[$key],
                'description' =>  $demodescription,
                'poster_url' => $poster[$key],
                'genre' => json_encode([$genre[$key]]),
                'average_rating' => $average_rating[$key],
                'total_ratings' => $total_rating[$key],
            ]);
        }
    }
}
