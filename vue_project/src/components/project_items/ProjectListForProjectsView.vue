<template>
  <div class="layout_projects">
    <div class="project-column">
      <ProjectComp
        v-for="room in nameSortList.slice(0, 4)"
        :key="room.id"
        :projectItem="room"
      >
        {{ room }}
      </ProjectComp>
    </div>
    <div class="project-column">
      <ProjectComp
        v-for="room in nameSortList.slice(4)"
        :key="room.id"
        :projectItem="room"
      >
        {{ room }}
      </ProjectComp>
    </div>
  </div>
</template>

<script>
import ProjectComp from "@/components/project_items/ProjectComp.vue";
export default {
  props: {
    projectList: String,
  },
  components: {
    ProjectComp,
  },
  data() {
    return {
      list: "",
      bedRoomList: [
        {
          id: 1,
          title: "Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bed_room/bed_room_1.png"),
        },
        {
          id: 2,
          title: "Classic Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bed_room/bed_room_2.png"),
        },
        {
          id: 3,
          title: "Minimal Bedroom table",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bed_room/bed_room_3.png"),
        },
        {
          id: 4,
          title: "Modern Medroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bed_room/bed_room_4.png"),
        },
        {
          id: 5,
          title: "Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bed_room/bed_room_5.png"),
        },
        {
          id: 6,
          title: "Modern Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bed_room/bed_room_6.png"),
        },

        {
          id: 7,
          title: "System Table",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bed_room/bed_room_7.png"),
        },

        {
          id: 8,
          title: "Modern Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bed_room/bed_room_8.png"),
        },
      ],
      bathRoomList: [
        {
          id: 1,
          title: "Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bath_room/bath_room_1.png"),
        },
        {
          id: 2,
          title: "Classic Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bath_room/bath_room_2.png"),
        },
        {
          id: 3,
          title: "Minimal Bedroom table",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bath_room/bath_room_3.png"),
        },
        {
          id: 4,
          title: "Modern Medroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bath_room/bath_room_4.png"),
        },
        {
          id: 5,
          title: "Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bath_room/bath_room_5.png"),
        },
        {
          id: 6,
          title: "Minimal Bedroom table",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bath_room/bath_room_3.png"),
        },
        {
          id: 7,
          title: "Modern Medroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bath_room/bath_room_4.png"),
        },
        {
          id: 8,
          title: "Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/bath_room/bath_room_5.png"),
        },
      ],
      kitchanRoomList: [
        {
          id: 1,
          title: "Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/kitchan_room/kitchan_room_1.png"),
        },
        {
          id: 2,
          title: "Classic Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/kitchan_room/kitchan_room_2.png"),
        },
        {
          id: 3,
          title: "Minimal Bedroom table",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/kitchan_room/kitchan_room_3.png"),
        },
        {
          id: 4,
          title: "Modern Medroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/kitchan_room/kitchan_room_4.png"),
        },
        {
          id: 5,
          title: "Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/kitchan_room/kitchan_room_5.png"),
        },
        {
          id: 6,
          title: "Minimal Bedroom table",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/kitchan_room/kitchan_room_6.png"),
        },
        {
          id: 7,
          title: "Modern Medroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/kitchan_room/kitchan_room_7.png"),
        },
        {
          id: 8,
          title: "Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/kitchan_room/kitchan_room_8.png"),
        },
      ],
      livingAreaRoomList: [
        {
          id: 1,
          title: "Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/living_area_room/living_area_room_1.png"),
        },
        {
          id: 2,
          title: "Classic Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/living_area_room/living_area_room_4.png"),
        },
        {
          id: 3,
          title: "Minimal Bedroom table",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/living_area_room/living_area_room_2.png"),
        },
        {
          id: 4,
          title: "Modern Medroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/living_area_room/living_area_room_3.png"),
        },
        {
          id: 5,
          title: "Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/living_area_room/living_area_room_4.png"),
        },
        {
          id: 6,
          title: "Minimal Bedroom table",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/living_area_room/living_area_room_2.png"),
        },
        {
          id: 7,
          title: "Modern Medroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/living_area_room/living_area_room_1.png"),
        },
        {
          id: 8,
          title: "Minimal Bedroom",
          category: "Decor / Artchitecture",
          imgPath: require("@/assets/img/project/projectsView/living_area_room/living_area_room_4.png"),
        },
      ],
    };
  },
  computed: {
    nameSortList() {
      switch (this.projectList) {
        case "living area":
          return this.livingAreaRoomList;
        case "bathroom":
          return this.bathRoomList;
        case "kitchan":
          return this.kitchanRoomList;
        default:
          return this.bedRoomList;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.layout_projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  .project-column {
    display: flex;
    flex-direction: column;
    gap: 35px;
    width: 585px;
  }
}
</style>
