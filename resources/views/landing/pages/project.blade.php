@extends('landing.app')

@section('content')

    <main>
        <!-- =======================
                                        Page Banner START -->
        <section class="content-section">
            <div class="container px-4 px-lg-5">
                {{-- Check if both projectcategories and projects are empty --}}
                @if ($projects->isEmpty())
                    <section class="content-section" id="project">
                        <div class="container px-4 px-lg-5">
                            <div class="content-section-heading text-center">
                                <h3 class="text-secondary mb-0">Project</h3>
                                <h2 class="mb-5">Recent Projects</h2>
                            </div>
                            <div class="row gx-0">

                                <div class="col-lg-6">
                                    <a class="portfolio-item" href="{{ route('demo') }}">
                                        <div class="caption">
                                            <div class="caption-content">
                                                <div class="h2">FATHERP</div>
                                                <p class="mb-0">Aplication For Enterprice!</p>
                                            </div>
                                        </div>
                                        <img class="img-fluid" src="{{ url('landing/assets/img/portfolio-1.jpg') }}"
                                            alt="..." />
                                    </a>
                                </div>
                                <div class="col-lg-6">
                                    <a class="portfolio-item" href="{{ route('demo') }}">
                                        <div class="caption">
                                            <div class="caption-content">
                                                <div class="h2">Fathwa</div>
                                                <p class="mb-0">Aplication Sender WhatsApp!</p>
                                            </div>
                                        </div>
                                        <img class="img-fluid" src="{{ url('landing/assets/img/portfolio-1.jpg') }}"
                                            alt="..." />
                                    </a>
                                </div>
                                <div class="col-lg-6">
                                    <a class="portfolio-item" href="{{ route('demo') }}">
                                        <div class="caption">
                                            <div class="caption-content">
                                                <div class="h2">Fathstore</div>
                                                <p class="mb-0">Online Shop Digital Assets!</p>
                                            </div>
                                        </div>
                                        <img class="img-fluid" src="{{ url('landing/assets/img/portfolio-3.jpg') }}"
                                            alt="..." />
                                    </a>
                                </div>
                                <div class="col-lg-6">
                                    <a class="portfolio-item" href="{{ route('demo') }}">
                                        <div class="caption">
                                            <div class="caption-content">
                                                <div class="h2">FathNet</div>
                                                <p class="mb-0">Internet For Everyone.</p>
                                            </div>
                                        </div>
                                        <img class="img-fluid" src="{{ url('landing/assets/img/portfolio-4.jpg') }}"
                                            alt="..." />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Dummy Data END -->
                @else
                    {{-- Display projects if available --}}
                    <!-- Display Projects START -->
                    <section class="position-relative pt-0">
                        <div class="container">
                            <div class="row g-4">
                                @foreach ($projects as $item)
                                    <!-- Card item START -->
                                    <div class="col-lg-4 col-sm-12">
                                        <div class="card w-75 h-75">
                                            <div class="max-w-100 max-h-100">
                                                <a href="{{ url('projects/detail/' . $item->uuid) }}"
                                                    style="text-decoration: none;">
                                                    <img src="{{ App\Models\Media::getimageweb($item->meta['media_token']) }}"
                                                        class="card-img-top" alt="{{ $item->title }}">
                                                </a>
                                            </div>
                                            <div class="card-body" style="flex-grow: 1;">
                                                <a href="{{ url('projects/detail/' . $item->uuid) }}"
                                                    style="text-decoration: none; color: inherit;">
                                                    <h5 class="card-title"> {{ $item->title }}</h5>
                                                    <p class="card-text">
                                                        {{ substr($item->description, 0, 100) . (strlen($item->description) > 100 ? '...' : '') }}
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card item END -->
                                @endforeach
                            </div>
                            <!-- Display Projects END -->
                            {{ $projects->links() }}
                        </div>
                    </section>
                @endif
            </div>
        </section>
        <!-- =======================
                                        Page Banner END -->
    </main>

@endsection
