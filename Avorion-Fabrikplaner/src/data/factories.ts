export type FactoryData = {
  id: string;
  name: string;
  inputs: (string | string[])[];
  outputs: string[];
  color: string;
};

export const factories: FactoryData[] = [
  {
    "id": "gas_collector",
    "name": "Gas Collector",
    "inputs": [],
    "outputs": [
      "Helium",
      "Hydrogen",
      "Neon",
      "Chlorine"
    ],
    "color": "#b7a57d"
  },
  {
    "id": "crystal_farm",
    "name": "Crystal Farm",
    "inputs": [],
    "outputs": [
      "Crystals"
    ],
    "color": "#f99fd2"
  },
  {
    "id": "mineral_extractor",
    "name": "Mineral Extractor",
    "inputs": [],
    "outputs": [
      "Minerals"
    ],
    "color": "#427b2e"
  },
  {
    "id": "scrap_metal_trader",
    "name": "Scrap Metal Trader",
    "inputs": [],
    "outputs": [
      "Scrap Metal"
    ],
    "color": "#e185ea"
  },
  {
    "id": "oil_refinery",
    "name": "Oil Refinery",
    "inputs": [
      "Energy Cells",
      "Raw Oil"
    ],
    "outputs": [
      "Oil"
    ],
    "color": "#59c992"
  },
  {
    "id": "solar_power_plant",
    "name": "Solar Power Plant",
    "inputs": [],
    "outputs": [
      "Energy Cells"
    ],
    "color": "#066705"
  },
  {
    "id": "carbon_extractor",
    "name": "Carbon Extractor",
    "inputs": [
      [
        "Corn",
        "Wheat",
        "Potatoes"
      ]
    ],
    "outputs": [
      "Carbon"
    ],
    "color": "#f2a1e4"
  },
  {
    "id": "electro_magnet_factory",
    "name": "Electro Magnet Factory",
    "inputs": [
      "Steel",
      "Copper",
      "Conductors",
      "Transformators"
    ],
    "outputs": [
      "Electro Magnets"
    ],
    "color": "#440a4b"
  },
  {
    "id": "energy_inverter_factory",
    "name": "Energy Inverter Factory",
    "inputs": [
      "Energy Tube",
      "Conductors",
      "Transformators"
    ],
    "outputs": [
      "Energy Inverters"
    ],
    "color": "#50bba3"
  },
  {
    "id": "servo_factory",
    "name": "Servo Factory",
    "inputs": [
      "Steel",
      "Aluminum",
      "Conductors",
      "Plastic"
    ],
    "outputs": [
      "Servos"
    ],
    "color": "#351e71"
  },
  {
    "id": "steel_tube_factory",
    "name": "Steel Tube Factory",
    "inputs": [
      "Steel",
      "Aluminum"
    ],
    "outputs": [
      "Steel Tubes"
    ],
    "color": "#9453cc"
  },
  {
    "id": "rubber_factory",
    "name": "Rubber Factory",
    "inputs": [
      "Energy Cell",
      "Oil"
    ],
    "outputs": [
      "Rubber",
      "Toxic Waste",
      "Acid"
    ],
    "color": "#2165b6"
  },
  {
    "id": "conductor_factory",
    "name": "Conductor Factory",
    "inputs": [
      "Zinc",
      "Steel",
      "Platinum",
      "Gold",
      "Energy Cell"
    ],
    "outputs": [
      "Conductors"
    ],
    "color": "#234986"
  },
  {
    "id": "transformator_factory",
    "name": "Transformator Factory",
    "inputs": [
      "Steel",
      "Plastic",
      "Silicon",
      "Silver",
      "Energy Cell"
    ],
    "outputs": [
      "Transformators"
    ],
    "color": "#79a4a1"
  },
  {
    "id": "plastic_manufacturer",
    "name": "Plastic Manufacturer",
    "inputs": [
      "Oil",
      "Energy Cells"
    ],
    "outputs": [
      "Plastic"
    ],
    "color": "#5e1359"
  },
  {
    "id": "solar_cell_factory",
    "name": "Solar Cell Factory",
    "inputs": [
      "Zinc",
      "Silicon",
      "Platinum",
      "Gold",
      "Energy Cell"
    ],
    "outputs": [
      "Solar Cells"
    ],
    "color": "#82c51e"
  },
  {
    "id": "tools_factory",
    "name": "Tools Factory",
    "inputs": [
      "Steel",
      "Platinum",
      "Silver",
      "Aluminum",
      "Energy Cell"
    ],
    "outputs": [
      "Tools"
    ],
    "color": "#3c696c"
  },
  {
    "id": "semi_conductor_manufacturer",
    "name": "Semi Conductor Manufacturer",
    "inputs": [
      "Steel",
      "Silicon",
      "Gold",
      "Energy Cell"
    ],
    "outputs": [
      "Semi Conductors"
    ],
    "color": "#7f5d4d"
  },
  {
    "id": "microchip_factory",
    "name": "Microchip Factory",
    "inputs": [
      "Wires",
      "Semi Conductors",
      "Energy Cells"
    ],
    "outputs": [
      "Microchips"
    ],
    "color": "#bb9949"
  },
  {
    "id": "energy_tube_factory",
    "name": "Energy Tube Factory",
    "inputs": [
      "Plastic",
      "Steel",
      "Platinum",
      "Neon",
      "Steel Tube",
      "Energy Cell"
    ],
    "outputs": [
      "Energy Tube"
    ],
    "color": "#3926ca"
  },
  {
    "id": "steel_factory",
    "name": "Steel Factory",
    "inputs": [
      "Ore",
      "Coal",
      "Carbon"
    ],
    "outputs": [
      "Steel"
    ],
    "color": "#1751d1"
  },
  {
    "id": "plasma_cell_factory",
    "name": "Plasma Cell Factory",
    "inputs": [
      "Energy Cells",
      "Steel",
      "Bio Gas",
      "Neon",
      "Helium"
    ],
    "outputs": [
      "Plasma Cells"
    ],
    "color": "#ae212f"
  },
  {
    "id": "fuel_factory",
    "name": "Fuel Factory",
    "inputs": [
      "Energy Cells",
      "Oil",
      "Nitrogen",
      "Fluorine"
    ],
    "outputs": [
      "Fuel",
      "Toxic Waste"
    ],
    "color": "#a0e3d7"
  },
  {
    "id": "glass_manufacturer",
    "name": "Glass Manufacturer",
    "inputs": [
      "Ore",
      "Crystals"
    ],
    "outputs": [
      "Glass"
    ],
    "color": "#10902c"
  },
  {
    "id": "chemical_factory",
    "name": "Chemical Factory",
    "inputs": [
      "Water",
      "Nitrogen",
      "Hydrogen",
      "Oxygen",
      "Bio Gas",
      "Carbon",
      "Energy Cells"
    ],
    "outputs": [
      "Chemicals",
      "Adhesive",
      "Coolant",
      "Solvent",
      "Acid"
    ],
    "color": "#ae3a97"
  },
  {
    "id": "wire_manufacturer",
    "name": "Wire Manufacturer",
    "inputs": [
      "Plastic",
      "Steel",
      "Gold"
    ],
    "outputs": [
      "Wires"
    ],
    "color": "#3d9d7c"
  },
  {
    "id": "metal_plate_factory",
    "name": "Metal Plate Factory",
    "inputs": [
      "Steel",
      "Silver"
    ],
    "outputs": [
      "Metal Plates"
    ],
    "color": "#e46205"
  },
  {
    "id": "paint_manufacturer",
    "name": "Paint Manufacturer",
    "inputs": [
      "Oil",
      "Water",
      "Chemicals",
      "Solvent",
      "Acid"
    ],
    "outputs": [
      "Paint",
      "Toxic Waste"
    ],
    "color": "#089e29"
  },
  {
    "id": "fertilizer_factory",
    "name": "Fertilizer Factory",
    "inputs": [
      "Chemicals",
      "Minerals",
      "Energy Cell",
      "Solvent"
    ],
    "outputs": [
      "Fertilizer",
      "Toxic Waste"
    ],
    "color": "#8bfdef"
  },
  {
    "id": "explosive_charge_factory",
    "name": "Explosive Charge Factory",
    "inputs": [
      "Fluorine",
      "Steel",
      "Energy Cells",
      "Plastic",
      "Chemicals",
      "Acid",
      "Adhesive"
    ],
    "outputs": [
      "Explosive Charges"
    ],
    "color": "#1aa606"
  },
  {
    "id": "fusion_core_factory",
    "name": "Fusion Core Factory",
    "inputs": [
      "Hydrogen",
      "Gold",
      "Plasma Cells",
      "Transformators",
      "Energy Tubes"
    ],
    "outputs": [
      "Fusion Cores"
    ],
    "color": "#cc9cf0"
  },
  {
    "id": "high_pressure_tube_factory",
    "name": "High Pressure Tube Factory",
    "inputs": [
      "Steel",
      "Aluminum",
      "Carbon",
      "Adhesive",
      "Steel Tubes"
    ],
    "outputs": [
      "High Pressure Tubes"
    ],
    "color": "#a95781"
  },
  {
    "id": "targeting_card_factory",
    "name": "Targeting Card Factory",
    "inputs": [
      "Microchip",
      "Copper",
      "Processors"
    ],
    "outputs": [
      "Targeting Cards"
    ],
    "color": "#105cb5"
  },
  {
    "id": "electromagnetic_charge_factory",
    "name": "Electromagnetic Charge Factory",
    "inputs": [
      "Energy Containers",
      "Electro Magnets",
      "Energy Tubes",
      "Transformators"
    ],
    "outputs": [
      "Electromagnetic Charges"
    ],
    "color": "#2f98f8"
  },
  {
    "id": "gauss_rail_factory",
    "name": "Gauss Rail Factory",
    "inputs": [
      "Energy Cells",
      "Electro Magnets",
      "Energy Tubes",
      "High Pressure Tube",
      "Transformator"
    ],
    "outputs": [
      "Gauss Rail"
    ],
    "color": "#385767"
  },
  {
    "id": "energy_generator_factory",
    "name": "Energy Generator Factory",
    "inputs": [
      "Energy Cells",
      "Microchips",
      "Conductors"
    ],
    "outputs": [
      "Energy Generator"
    ],
    "color": "#5879ff"
  },
  {
    "id": "display_factory",
    "name": "Display Factory",
    "inputs": [
      "Glass",
      "Microchips",
      "Semi Conductors",
      "Plasma Cell"
    ],
    "outputs": [
      "Display"
    ],
    "color": "#640e8d"
  },
  {
    "id": "processor_factory",
    "name": "Processor Factory",
    "inputs": [
      "Microchips",
      "Semi Conductors",
      "Copper",
      "Platinum",
      "Gold"
    ],
    "outputs": [
      "Processors"
    ],
    "color": "#ca8de7"
  },
  {
    "id": "computer_component_factory",
    "name": "Computer Component Factory",
    "inputs": [
      "Wires",
      "Microchips",
      "Semi Conductors",
      "Copper",
      "Platinum",
      "Gold"
    ],
    "outputs": [
      "Display",
      "Targeting Card",
      "Processor"
    ],
    "color": "#8d6079"
  },
  {
    "id": "nanobot_factory",
    "name": "Nanobot Factory",
    "inputs": [
      "Crystals",
      "Semi Conductors"
    ],
    "outputs": [
      "Nanobots"
    ],
    "color": "#862bc7"
  },
  {
    "id": "laser_compressor_factory",
    "name": "Laser Compressor Factory",
    "inputs": [
      "Plasma Cell",
      "Transformator",
      "Energy Tube",
      "Wires"
    ],
    "outputs": [
      "Laser Compressor",
      "Scrap Metal"
    ],
    "color": "#de4e92"
  },
  {
    "id": "laser_head_factory",
    "name": "Laser Head Factory",
    "inputs": [
      "Glass",
      "Conductor",
      "Aluminum",
      "Energy Cell"
    ],
    "outputs": [
      "Laser Head",
      "Toxic Waste"
    ],
    "color": "#d312a0"
  },
  {
    "id": "drone_factory",
    "name": "Drone Factory",
    "inputs": [
      "Fuel",
      "Plasma Cells",
      "Metal Plates"
    ],
    "outputs": [
      "Drone",
      "Scrap Metal"
    ],
    "color": "#831133"
  },
  {
    "id": "warhead_factory",
    "name": "Warhead Factory",
    "inputs": [
      "Conductors",
      "Chemicals",
      "Metal Plates"
    ],
    "outputs": [
      "Warhead",
      "Scrap Metal"
    ],
    "color": "#d074c7"
  },
  {
    "id": "power_unit_factory",
    "name": "Power Unit Factory",
    "inputs": [
      "Transformators",
      "Energy Cells",
      "Plasma Cells"
    ],
    "outputs": [
      "Power Unit"
    ],
    "color": "#b1a22c"
  },
  {
    "id": "antigrav_unit_factory",
    "name": "Antigrav Unit Factory",
    "inputs": [
      "Power Units",
      "Processors",
      "Energy Cell"
    ],
    "outputs": [
      "Antigrav Unit"
    ],
    "color": "#1a2a78"
  },
  {
    "id": "energy_container_factory",
    "name": "Energy Container Factory",
    "inputs": [
      "Energy Cells",
      "Transformators"
    ],
    "outputs": [
      "Energy Containers"
    ],
    "color": "#fe632a"
  },
  {
    "id": "solar_panel_factory",
    "name": "Solar Panel Factory",
    "inputs": [
      "Solar Cells",
      "Transformator"
    ],
    "outputs": [
      "Solar Panel"
    ],
    "color": "#f7703b"
  },
  {
    "id": "accelerator_factory",
    "name": "Accelerator Factory",
    "inputs": [
      "Turbines",
      "Plasma Cells",
      "Fusion Generators",
      "Energy Tubes",
      "High Pressure Tubes",
      "Conductors",
      "Gauss Rail"
    ],
    "outputs": [
      "Neutron Accelerator",
      "Proton Accelerator",
      "Electron Accelerator"
    ],
    "color": "#a1e0cc"
  },
  {
    "id": "targeting_system_factory",
    "name": "Targeting System Factory",
    "inputs": [
      "Targeting Card",
      "Processor",
      "Energy Cells",
      "Conductors",
      "Wires"
    ],
    "outputs": [
      "Targeting System"
    ],
    "color": "#2b1072"
  },
  {
    "id": "ammunition_factory",
    "name": "Ammunition Factory",
    "inputs": [
      "Lead",
      "Aluminum",
      "Steel",
      "Adhesive",
      "Energy Cells"
    ],
    "outputs": [
      "Ammunition S",
      "Ammunition M",
      "Ammunition L"
    ],
    "color": "#0e603a"
  },
  {
    "id": "high_capacity_lens_factory",
    "name": "High Capacity Lens Factory",
    "inputs": [
      "Glass",
      "Carbon",
      "Plastic",
      "Diamonds"
    ],
    "outputs": [
      "High Capacity Lens"
    ],
    "color": "#234764"
  },
  {
    "id": "laser_modulator_factory",
    "name": "Laser Modulator Factory",
    "inputs": [
      "Servos",
      "Energy Tubes",
      "Transformators",
      "Energy Cells"
    ],
    "outputs": [
      "Laser Modulator"
    ],
    "color": "#2c3a27"
  },
  {
    "id": "force_generator_factory",
    "name": "Force Generator Factory",
    "inputs": [
      "Electro Magnets",
      "Steel",
      "Plastic",
      "Nanobots",
      "Energy Generator"
    ],
    "outputs": [
      "Force Generator"
    ],
    "color": "#909f75"
  },
  {
    "id": "antigrav_generator_factory",
    "name": "Antigrav Generator Factory",
    "inputs": [
      "Electro Magnets",
      "Servos",
      "Wires",
      "Antigrav Unit",
      "Energy Generator"
    ],
    "outputs": [
      "Antigrav Generator"
    ],
    "color": "#d2b9c0"
  },
  {
    "id": "fusion_generator_factory",
    "name": "Fusion Generator Factory",
    "inputs": [
      "Fusion Cores",
      "Steel",
      "Plasma Cells",
      "Power Units"
    ],
    "outputs": [
      "Fusion Generator"
    ],
    "color": "#9eb430"
  },
  {
    "id": "turbine_factory",
    "name": "Turbine Factory",
    "inputs": [
      "Servos",
      "Steel",
      "Coolant",
      "Power Units"
    ],
    "outputs": [
      "Turbine"
    ],
    "color": "#05f178"
  },
  {
    "id": "tesla_coil_factory",
    "name": "Tesla Coil Factory",
    "inputs": [
      "Steel",
      "Copper",
      "Fusion Cores",
      "Plastic"
    ],
    "outputs": [
      "Military Tesla Coil",
      "Industrial Tesla Coil"
    ],
    "color": "#cb1eb0"
  },
  {
    "id": "medical_supplies_factory",
    "name": "Medical Supplies Factory",
    "inputs": [
      "Water",
      "Chemicals",
      "Fabric",
      "Zinc",
      "Chlorine"
    ],
    "outputs": [
      "Medical Supplies"
    ],
    "color": "#f6afaa"
  },
  {
    "id": "satellite_factory",
    "name": "Satellite Factory",
    "inputs": [
      "Solar Panels",
      "Processors",
      "Displays",
      "Energy Container",
      "Steel Tube"
    ],
    "outputs": [
      "Satellite",
      "Scrap Metal"
    ],
    "color": "#b7ca05"
  },
  {
    "id": "drill_factory",
    "name": "Drill Factory",
    "inputs": [
      "Laser Head",
      "Processor",
      "Steel",
      "Diamonds"
    ],
    "outputs": [
      "Drill",
      "Scrap Metal"
    ],
    "color": "#931b48"
  },
  {
    "id": "teleporter_factory",
    "name": "Teleporter Factory",
    "inputs": [
      "Metal Plate",
      "Power Unit",
      "Antigrav Unit",
      "Plasma Cells",
      "Conductor",
      "Transformator"
    ],
    "outputs": [
      "Teleporter",
      "Scrap Metal"
    ],
    "color": "#bc2538"
  },
  {
    "id": "computation_mainframe_factory",
    "name": "Computation Mainframe Factory",
    "inputs": [
      "Processors",
      "Power Unit",
      "Microchip",
      "Display",
      "Wires"
    ],
    "outputs": [
      "Computation Mainframe"
    ],
    "color": "#d73dbf"
  },
  {
    "id": "vehicle_factory",
    "name": "Vehicle Factory",
    "inputs": [
      "Rubber",
      "Power Unit",
      "Energy Generator",
      "Metal Plates",
      "Antigrav Unit",
      "Display"
    ],
    "outputs": [
      "Vehicle",
      "Scrap Metal"
    ],
    "color": "#a27af9"
  },
  {
    "id": "gun_factory",
    "name": "Gun Factory",
    "inputs": [
      "Steel",
      "Ammunition",
      "Aluminum",
      "Plastic"
    ],
    "outputs": [
      "Guns"
    ],
    "color": "#88d766"
  },
  {
    "id": "rocket_factory",
    "name": "Rocket Factory",
    "inputs": [
      "Warhead",
      "Fuel",
      "Steel",
      "Microchip"
    ],
    "outputs": [
      "Rocket"
    ],
    "color": "#540aaf"
  },
  {
    "id": "mining_robot_factory",
    "name": "Mining Robot Factory",
    "inputs": [
      "Power Unit",
      "Processor",
      "Display",
      "Nanobots",
      "Drills",
      "Coolant",
      "Teleporter"
    ],
    "outputs": [
      "Mining Robot",
      "Scrap Metal"
    ],
    "color": "#a9b6e4"
  },
  {
    "id": "war_robot_factory",
    "name": "War Robot Factory",
    "inputs": [
      "Power Unit",
      "Processor",
      "Display",
      "Nanobots",
      "Guns",
      "Teleporter",
      "Coolant"
    ],
    "outputs": [
      "War Robot",
      "Scrap Metal"
    ],
    "color": "#806123"
  },
  {
    "id": "body_armor_factory",
    "name": "Body Armor Factory",
    "inputs": [
      "Metal Plates",
      "Coolant",
      "Teleporter",
      "Antigrav Unit",
      "Carbon",
      "Nanobot"
    ],
    "outputs": [
      "Body Armor"
    ],
    "color": "#6b123d"
  },
  {
    "id": "water_collector",
    "name": "Water Collector",
    "inputs": [],
    "outputs": [
      "Water"
    ],
    "color": "#26a4bf"
  },
  {
    "id": "plankton_collector",
    "name": "Plankton Collector",
    "inputs": [],
    "outputs": [
      "Plankton"
    ],
    "color": "#142e82"
  },
  {
    "id": "fish_farm",
    "name": "Fish Farm",
    "inputs": [
      "Water",
      "Wheat",
      "Oxygen"
    ],
    "outputs": [
      "Fish",
      "Bio Gas",
      "Plankton"
    ],
    "color": "#eed1e5"
  },
  {
    "id": "plant_farm",
    "name": "Plant Farm",
    "inputs": [
      "Energy Cells",
      "Water"
    ],
    "outputs": [
      "Plants",
      "Oxygen"
    ],
    "color": "#9c81d9"
  },
  {
    "id": "rice_farm",
    "name": "Rice Farm",
    "inputs": [
      "Energy Cells",
      "Water"
    ],
    "outputs": [
      "Rice",
      "Oxygen"
    ],
    "color": "#5e385b"
  },
  {
    "id": "potato_farm",
    "name": "Potato Farm",
    "inputs": [
      "Energy Cells",
      "Water"
    ],
    "outputs": [
      "Potatoes",
      "Oxygen"
    ],
    "color": "#61e5a4"
  },
  {
    "id": "wheat_farm",
    "name": "Wheat Farm",
    "inputs": [
      "Energy Cells",
      "Water"
    ],
    "outputs": [
      "Wheat",
      "Oxygen"
    ],
    "color": "#9f71d5"
  },
  {
    "id": "corn_farm",
    "name": "Corn Farm",
    "inputs": [
      "Energy Cells",
      "Water"
    ],
    "outputs": [
      "Corn",
      "Oxygen"
    ],
    "color": "#4095e2"
  },
  {
    "id": "wood_farm",
    "name": "Wood Farm",
    "inputs": [
      "Energy Cells",
      "Water"
    ],
    "outputs": [
      "Wood",
      "Oxygen"
    ],
    "color": "#ab11e1"
  },
  {
    "id": "fruit_farm",
    "name": "Fruit Farm",
    "inputs": [
      "Energy Cells",
      "Water"
    ],
    "outputs": [
      "Fruits",
      "Oxygen"
    ],
    "color": "#7109d4"
  },
  {
    "id": "coffee_farm",
    "name": "Coffee Farm",
    "inputs": [
      "Energy Cell",
      "Water",
      "Fertilizer"
    ],
    "outputs": [
      "Coffee",
      "Oxygen"
    ],
    "color": "#214faf"
  },
  {
    "id": "cocoa_farm",
    "name": "Cocoa Farm",
    "inputs": [
      "Energy Cell",
      "Water",
      "Fertilizer"
    ],
    "outputs": [
      "Cocoa",
      "Oxygen"
    ],
    "color": "#146f4b"
  },
  {
    "id": "tea_farm",
    "name": "Tea Farm",
    "inputs": [
      "Energy Cells",
      "Water"
    ],
    "outputs": [
      "Tea",
      "Oxygen"
    ],
    "color": "#31a55f"
  },
  {
    "id": "vegetable_farm",
    "name": "Vegetable Farm",
    "inputs": [
      "Energy Cells",
      "Water"
    ],
    "outputs": [
      "Vegetables",
      "Oxygen"
    ],
    "color": "#11eab9"
  },
  {
    "id": "spices_farm",
    "name": "Spices Farm",
    "inputs": [
      "Energy Cell",
      "Water",
      "Fertilizer"
    ],
    "outputs": [
      "Spices",
      "Oxygen"
    ],
    "color": "#80ed77"
  },
  {
    "id": "sheep_ranch",
    "name": "Sheep Ranch",
    "inputs": [
      "Energy Cells",
      "Oxygen",
      "Wheat",
      "Water"
    ],
    "outputs": [
      "Sheep",
      "Bio Gas",
      "Fabric"
    ],
    "color": "#b34948"
  },
  {
    "id": "fungus_farm",
    "name": "Fungus Farm",
    "inputs": [
      "Bio Gas",
      "Water",
      "Mineral"
    ],
    "outputs": [
      "Fungi",
      "Toxic Waste"
    ],
    "color": "#91a1df"
  },
  {
    "id": "cattle_ranch",
    "name": "Cattle Ranch",
    "inputs": [
      "Wheat",
      "Oxygen",
      "Water"
    ],
    "outputs": [
      "Cattle",
      "Bio Gas"
    ],
    "color": "#f6d884"
  },
  {
    "id": "protein_factory",
    "name": "Protein Factory",
    "inputs": [
      "Meat",
      "Dairy"
    ],
    "outputs": [
      "Protein"
    ],
    "color": "#b283f4"
  },
  {
    "id": "meat_factory",
    "name": "Meat Factory",
    "inputs": [
      "Cattle"
    ],
    "outputs": [
      "Meat",
      "Leather"
    ],
    "color": "#2ef0a5"
  },
  {
    "id": "dairy_farm",
    "name": "Dairy Farm",
    "inputs": [
      "Cattle"
    ],
    "outputs": [
      "Dairy",
      "Leather"
    ],
    "color": "#9b0245"
  },
  {
    "id": "fabric_factory",
    "name": "Fabric Factory",
    "inputs": [
      "Sheep"
    ],
    "outputs": [
      "Fabric"
    ],
    "color": "#eddfe1"
  },
  {
    "id": "clothes_factory",
    "name": "Clothes Factory",
    "inputs": [
      "Fabric"
    ],
    "outputs": [
      "Clothes"
    ],
    "color": "#2b2438"
  },
  {
    "id": "paper_factory",
    "name": "Paper Factory",
    "inputs": [
      "Water",
      "Wood"
    ],
    "outputs": [
      "Paper"
    ],
    "color": "#9e9d71"
  },
  {
    "id": "brewery",
    "name": "Brewery",
    "inputs": [
      "Water",
      "Wheat",
      "Fungi"
    ],
    "outputs": [
      "Beer"
    ],
    "color": "#720d32"
  },
  {
    "id": "wine_factory",
    "name": "Wine Factory",
    "inputs": [
      "Fruits",
      "Fungi"
    ],
    "outputs": [
      "Wine"
    ],
    "color": "#6a6f3b"
  },
  {
    "id": "distillery",
    "name": "Distillery",
    "inputs": [
      "Energy Cells",
      "Wheat",
      "Water"
    ],
    "outputs": [
      "Liquor"
    ],
    "color": "#72e21e"
  },
  {
    "id": "food_factory",
    "name": "Food Factory",
    "inputs": [
      "Wheat",
      "Meat",
      "Corn",
      "Vegetables"
    ],
    "outputs": [
      "Food"
    ],
    "color": "#005a15"
  },
  {
    "id": "food_bar_factory",
    "name": "Food Bar Factory",
    "inputs": [
      "Energy Cell",
      "Wheat",
      "Corn",
      "Rice"
    ],
    "outputs": [
      "Food Bars"
    ],
    "color": "#24a1d6"
  },
  {
    "id": "luxury_food_factory",
    "name": "Luxury Food Factory",
    "inputs": [
      "Energy Cell",
      "Wheat",
      "Fruits",
      "Spices",
      "Wine"
    ],
    "outputs": [
      "Luxury Food"
    ],
    "color": "#ff4658"
  },
  {
    "id": "book_factory",
    "name": "Book Factory",
    "inputs": [
      "Paper",
      "Energy Cell"
    ],
    "outputs": [
      "Books"
    ],
    "color": "#e7e69a"
  },
  {
    "id": "jewelry_manufacturer",
    "name": "Jewelry Manufacturer",
    "inputs": [
      "Platinum",
      "Gems"
    ],
    "outputs": [
      "Jewelry"
    ],
    "color": "#60cc62"
  },
  {
    "id": "silicon_mine",
    "name": "Silicon Mine",
    "inputs": [],
    "outputs": [
      "Silicon"
    ],
    "color": "#b2d885"
  },
  {
    "id": "ore_mine",
    "name": "Ore Mine",
    "inputs": [],
    "outputs": [
      "Ore"
    ],
    "color": "#f02bda"
  },
  {
    "id": "coal_mine",
    "name": "Coal Mine",
    "inputs": [],
    "outputs": [
      "Coal"
    ],
    "color": "#0f1625"
  },
  {
    "id": "oil_rig",
    "name": "Oil Rig",
    "inputs": [],
    "outputs": [
      "Raw Oil"
    ],
    "color": "#e0a333"
  },
  {
    "id": "noble_metal_mine_gp",
    "name": "Noble Metal Mine GP",
    "inputs": [],
    "outputs": [
      "Gold",
      "Platinum"
    ],
    "color": "#e4bc86"
  },
  {
    "id": "noble_metal_mine_sp",
    "name": "Noble Metal Mine SP",
    "inputs": [],
    "outputs": [
      "Silver",
      "Platinum"
    ],
    "color": "#e4bb12"
  },
  {
    "id": "noble_metal_mine_sg",
    "name": "Noble Metal Mine SG",
    "inputs": [],
    "outputs": [
      "Silver",
      "Gold"
    ],
    "color": "#e4bb1b"
  },
  {
    "id": "zinc_mine",
    "name": "Zinc Mine",
    "inputs": [],
    "outputs": [
      "Zinc"
    ],
    "color": "#bc99c4"
  },
  {
    "id": "copper_mine",
    "name": "Copper Mine",
    "inputs": [],
    "outputs": [
      "Copper"
    ],
    "color": "#891430"
  },
  {
    "id": "lead_mine",
    "name": "Lead Mine",
    "inputs": [],
    "outputs": [
      "Lead"
    ],
    "color": "#04779a"
  },
  {
    "id": "aluminum_mine",
    "name": "Aluminum Mine",
    "inputs": [],
    "outputs": [
      "Aluminum"
    ],
    "color": "#dc143f"
  },
  {
    "id": "ice_mine",
    "name": "Ice Mine",
    "inputs": [],
    "outputs": [
      "Water"
    ],
    "color": "#d45ab6"
  }
];
