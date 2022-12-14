"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualItem = void 0;
// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "VirtualItem.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
/**
 * @generated from protobuf enum VirtualItem
 */
var VirtualItem;
(function (VirtualItem) {
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_NONE = 0;
     */
    VirtualItem[VirtualItem["VIRTUAL_NONE"] = 0] = "VIRTUAL_NONE";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_AVATAR_EXP = 101;
     */
    VirtualItem[VirtualItem["VIRTUAL_AVATAR_EXP"] = 101] = "VIRTUAL_AVATAR_EXP";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_PLAYER_EXP = 102;
     */
    VirtualItem[VirtualItem["VIRTUAL_PLAYER_EXP"] = 102] = "VIRTUAL_PLAYER_EXP";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_FETTER_EXP = 105;
     */
    VirtualItem[VirtualItem["VIRTUAL_FETTER_EXP"] = 105] = "VIRTUAL_FETTER_EXP";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_RESIN = 106;
     */
    VirtualItem[VirtualItem["VIRTUAL_RESIN"] = 106] = "VIRTUAL_RESIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_LEGENDARY_KEY = 107;
     */
    VirtualItem[VirtualItem["VIRTUAL_LEGENDARY_KEY"] = 107] = "VIRTUAL_LEGENDARY_KEY";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_ASTER_PROGRESS = 108;
     */
    VirtualItem[VirtualItem["VIRTUAL_ASTER_PROGRESS"] = 108] = "VIRTUAL_ASTER_PROGRESS";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_ASTER_CREDIT = 109;
     */
    VirtualItem[VirtualItem["VIRTUAL_ASTER_CREDIT"] = 109] = "VIRTUAL_ASTER_CREDIT";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_ASTER_TOKEN = 110;
     */
    VirtualItem[VirtualItem["VIRTUAL_ASTER_TOKEN"] = 110] = "VIRTUAL_ASTER_TOKEN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_SHIMMERING_ESSENCE = 111;
     */
    VirtualItem[VirtualItem["VIRTUAL_SHIMMERING_ESSENCE"] = 111] = "VIRTUAL_SHIMMERING_ESSENCE";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_WARM_ESSENCE = 112;
     */
    VirtualItem[VirtualItem["VIRTUAL_WARM_ESSENCE"] = 112] = "VIRTUAL_WARM_ESSENCE";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_WONDROUS_ESSENCE = 113;
     */
    VirtualItem[VirtualItem["VIRTUAL_WONDROUS_ESSENCE"] = 113] = "VIRTUAL_WONDROUS_ESSENCE";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_TREASURE_MAP_TOKEN = 114;
     */
    VirtualItem[VirtualItem["VIRTUAL_TREASURE_MAP_TOKEN"] = 114] = "VIRTUAL_TREASURE_MAP_TOKEN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_SEA_LAMP_COIN = 115;
     */
    VirtualItem[VirtualItem["VIRTUAL_SEA_LAMP_COIN"] = 115] = "VIRTUAL_SEA_LAMP_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_SEA_LAMP_POPULARITY = 116;
     */
    VirtualItem[VirtualItem["VIRTUAL_SEA_LAMP_POPULARITY"] = 116] = "VIRTUAL_SEA_LAMP_POPULARITY";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_MECHANICUS_COIN = 117;
     */
    VirtualItem[VirtualItem["VIRTUAL_MECHANICUS_COIN"] = 117] = "VIRTUAL_MECHANICUS_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_FLEUR_FAIR_CREDIT = 118;
     */
    VirtualItem[VirtualItem["VIRTUAL_FLEUR_FAIR_CREDIT"] = 118] = "VIRTUAL_FLEUR_FAIR_CREDIT";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_FLEUR_FAIR_TOKEN = 119;
     */
    VirtualItem[VirtualItem["VIRTUAL_FLEUR_FAIR_TOKEN"] = 119] = "VIRTUAL_FLEUR_FAIR_TOKEN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_WATER_SPIRIT_COIN = 120;
     */
    VirtualItem[VirtualItem["VIRTUAL_WATER_SPIRIT_COIN"] = 120] = "VIRTUAL_WATER_SPIRIT_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_HOME_EXP = 121;
     */
    VirtualItem[VirtualItem["VIRTUAL_HOME_EXP"] = 121] = "VIRTUAL_HOME_EXP";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_CHANNELLER_SLAB_TOKEN = 122;
     */
    VirtualItem[VirtualItem["VIRTUAL_CHANNELLER_SLAB_TOKEN"] = 122] = "VIRTUAL_CHANNELLER_SLAB_TOKEN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_HIDE_AND_SEEK_COIN = 123;
     */
    VirtualItem[VirtualItem["VIRTUAL_HIDE_AND_SEEK_COIN"] = 123] = "VIRTUAL_HIDE_AND_SEEK_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_SUMMER_TIME_DRAFT_WOOD = 124;
     */
    VirtualItem[VirtualItem["VIRTUAL_SUMMER_TIME_DRAFT_WOOD"] = 124] = "VIRTUAL_SUMMER_TIME_DRAFT_WOOD";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_SUMMER_TIME_MINI_HARPASTUM = 125;
     */
    VirtualItem[VirtualItem["VIRTUAL_SUMMER_TIME_MINI_HARPASTUM"] = 125] = "VIRTUAL_SUMMER_TIME_MINI_HARPASTUM";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_BOUNCE_CONJURING_COIN = 126;
     */
    VirtualItem[VirtualItem["VIRTUAL_BOUNCE_CONJURING_COIN"] = 126] = "VIRTUAL_BOUNCE_CONJURING_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_BLITZ_RUSH_COIN_A = 127;
     */
    VirtualItem[VirtualItem["VIRTUAL_BLITZ_RUSH_COIN_A"] = 127] = "VIRTUAL_BLITZ_RUSH_COIN_A";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_BLITZ_RUSH_COIN_B = 128;
     */
    VirtualItem[VirtualItem["VIRTUAL_BLITZ_RUSH_COIN_B"] = 128] = "VIRTUAL_BLITZ_RUSH_COIN_B";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_CHESS_EXP = 129;
     */
    VirtualItem[VirtualItem["VIRTUAL_CHESS_EXP"] = 129] = "VIRTUAL_CHESS_EXP";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_CHESS_COIN = 130;
     */
    VirtualItem[VirtualItem["VIRTUAL_CHESS_COIN"] = 130] = "VIRTUAL_CHESS_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_LUNA_RITE_ATMOSPHERE = 131;
     */
    VirtualItem[VirtualItem["VIRTUAL_LUNA_RITE_ATMOSPHERE"] = 131] = "VIRTUAL_LUNA_RITE_ATMOSPHERE";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_ROGUELIKE_COIN_A = 132;
     */
    VirtualItem[VirtualItem["VIRTUAL_ROGUELIKE_COIN_A"] = 132] = "VIRTUAL_ROGUELIKE_COIN_A";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_ROGUELIKE_COIN_B = 133;
     */
    VirtualItem[VirtualItem["VIRTUAL_ROGUELIKE_COIN_B"] = 133] = "VIRTUAL_ROGUELIKE_COIN_B";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_ROGUELIKE_COIN_C = 134;
     */
    VirtualItem[VirtualItem["VIRTUAL_ROGUELIKE_COIN_C"] = 134] = "VIRTUAL_ROGUELIKE_COIN_C";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_WINTER_CAMP_COIN_A = 135;
     */
    VirtualItem[VirtualItem["VIRTUAL_WINTER_CAMP_COIN_A"] = 135] = "VIRTUAL_WINTER_CAMP_COIN_A";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_WINTER_CAMP_COIN_B = 136;
     */
    VirtualItem[VirtualItem["VIRTUAL_WINTER_CAMP_COIN_B"] = 136] = "VIRTUAL_WINTER_CAMP_COIN_B";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_LANTERN_RITE_COIN_A = 137;
     */
    VirtualItem[VirtualItem["VIRTUAL_LANTERN_RITE_COIN_A"] = 137] = "VIRTUAL_LANTERN_RITE_COIN_A";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_LANTERN_RITE_COIN_B = 138;
     */
    VirtualItem[VirtualItem["VIRTUAL_LANTERN_RITE_COIN_B"] = 138] = "VIRTUAL_LANTERN_RITE_COIN_B";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_LANTERN_RITE_COIN_C = 139;
     */
    VirtualItem[VirtualItem["VIRTUAL_LANTERN_RITE_COIN_C"] = 139] = "VIRTUAL_LANTERN_RITE_COIN_C";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_ROGUE_DIARY_COIN = 140;
     */
    VirtualItem[VirtualItem["VIRTUAL_ROGUE_DIARY_COIN"] = 140] = "VIRTUAL_ROGUE_DIARY_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_SUMMER_TIME_V2_COIN = 141;
     */
    VirtualItem[VirtualItem["VIRTUAL_SUMMER_TIME_V2_COIN"] = 141] = "VIRTUAL_SUMMER_TIME_V2_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_ROGUE_DIARY_DUNGEON_COIN = 142;
     */
    VirtualItem[VirtualItem["VIRTUAL_ROGUE_DIARY_DUNGEON_COIN"] = 142] = "VIRTUAL_ROGUE_DIARY_DUNGEON_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_GRAVEN_INNOCENCE_COIN_A = 143;
     */
    VirtualItem[VirtualItem["VIRTUAL_GRAVEN_INNOCENCE_COIN_A"] = 143] = "VIRTUAL_GRAVEN_INNOCENCE_COIN_A";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_GRAVEN_INNOCENCE_COIN_B = 144;
     */
    VirtualItem[VirtualItem["VIRTUAL_GRAVEN_INNOCENCE_COIN_B"] = 144] = "VIRTUAL_GRAVEN_INNOCENCE_COIN_B";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_TREASURE_SEELIE_COIN = 145;
     */
    VirtualItem[VirtualItem["VIRTUAL_TREASURE_SEELIE_COIN"] = 145] = "VIRTUAL_TREASURE_SEELIE_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_VINTAGE_POPULARITY = 147;
     */
    VirtualItem[VirtualItem["VIRTUAL_VINTAGE_POPULARITY"] = 147] = "VIRTUAL_VINTAGE_POPULARITY";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_GCG_EXP = 146;
     */
    VirtualItem[VirtualItem["VIRTUAL_GCG_EXP"] = 146] = "VIRTUAL_GCG_EXP";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_VINTAGE_MARKET_COIN_A = 148;
     */
    VirtualItem[VirtualItem["VIRTUAL_VINTAGE_MARKET_COIN_A"] = 148] = "VIRTUAL_VINTAGE_MARKET_COIN_A";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_VINTAGE_MARKET_COIN_B = 149;
     */
    VirtualItem[VirtualItem["VIRTUAL_VINTAGE_MARKET_COIN_B"] = 149] = "VIRTUAL_VINTAGE_MARKET_COIN_B";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_VINTAGE_MARKET_COIN_C = 150;
     */
    VirtualItem[VirtualItem["VIRTUAL_VINTAGE_MARKET_COIN_C"] = 150] = "VIRTUAL_VINTAGE_MARKET_COIN_C";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_FUNGUS_FIGHTER_CAPTURE_COIN = 151;
     */
    VirtualItem[VirtualItem["VIRTUAL_FUNGUS_FIGHTER_CAPTURE_COIN"] = 151] = "VIRTUAL_FUNGUS_FIGHTER_CAPTURE_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_FUNGUS_FIGHTER_TRAINING_COIN = 152;
     */
    VirtualItem[VirtualItem["VIRTUAL_FUNGUS_FIGHTER_TRAINING_COIN"] = 152] = "VIRTUAL_FUNGUS_FIGHTER_TRAINING_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_EFFIGY_CHALLENGE_V2_COIN = 153;
     */
    VirtualItem[VirtualItem["VIRTUAL_EFFIGY_CHALLENGE_V2_COIN"] = 153] = "VIRTUAL_EFFIGY_CHALLENGE_V2_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_BRICK_BREAKER_COIN = 155;
     */
    VirtualItem[VirtualItem["VIRTUAL_BRICK_BREAKER_COIN"] = 155] = "VIRTUAL_BRICK_BREAKER_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_HCOIN = 201;
     */
    VirtualItem[VirtualItem["VIRTUAL_HCOIN"] = 201] = "VIRTUAL_HCOIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_SCOIN = 202;
     */
    VirtualItem[VirtualItem["VIRTUAL_SCOIN"] = 202] = "VIRTUAL_SCOIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_MCOIN = 203;
     */
    VirtualItem[VirtualItem["VIRTUAL_MCOIN"] = 203] = "VIRTUAL_MCOIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_HOME_COIN = 204;
     */
    VirtualItem[VirtualItem["VIRTUAL_HOME_COIN"] = 204] = "VIRTUAL_HOME_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_GCG_COIN = 205;
     */
    VirtualItem[VirtualItem["VIRTUAL_GCG_COIN"] = 205] = "VIRTUAL_GCG_COIN";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_INAZUMA_REPUTATION = 314;
     */
    VirtualItem[VirtualItem["VIRTUAL_INAZUMA_REPUTATION"] = 314] = "VIRTUAL_INAZUMA_REPUTATION";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_MENGDE_REPUTATION = 315;
     */
    VirtualItem[VirtualItem["VIRTUAL_MENGDE_REPUTATION"] = 315] = "VIRTUAL_MENGDE_REPUTATION";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_SUMERU_REPUTATION = 316;
     */
    VirtualItem[VirtualItem["VIRTUAL_SUMERU_REPUTATION"] = 316] = "VIRTUAL_SUMERU_REPUTATION";
    /**
     * @generated from protobuf enum value: VIRTUAL_ITEM_VIRTUAL_LIYUE_REPUTATION = 317;
     */
    VirtualItem[VirtualItem["VIRTUAL_LIYUE_REPUTATION"] = 317] = "VIRTUAL_LIYUE_REPUTATION";
})(VirtualItem = exports.VirtualItem || (exports.VirtualItem = {}));
