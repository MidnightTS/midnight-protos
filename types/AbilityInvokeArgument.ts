// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "AbilityInvokeArgument.proto" (syntax proto3)
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
 * @generated from protobuf enum AbilityInvokeArgument
 */
export enum AbilityInvokeArgument {
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_MODIFIER_CHANGE = 1;
     */
    META_MODIFIER_CHANGE = 1,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_COMMAND_MODIFIER_CHANGE_REQUEST = 2;
     */
    META_COMMAND_MODIFIER_CHANGE_REQUEST = 2,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_SPECIAL_FLOAT_ARGUMENT = 3;
     */
    META_SPECIAL_FLOAT_ARGUMENT = 3,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_OVERRIDE_PARAM = 4;
     */
    META_OVERRIDE_PARAM = 4,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_CLEAR_OVERRIDE_PARAM = 5;
     */
    META_CLEAR_OVERRIDE_PARAM = 5,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_REINIT_OVERRIDEMAP = 6;
     */
    META_REINIT_OVERRIDEMAP = 6,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_GLOBAL_FLOAT_VALUE = 7;
     */
    META_GLOBAL_FLOAT_VALUE = 7,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_CLEAR_GLOBAL_FLOAT_VALUE = 8;
     */
    META_CLEAR_GLOBAL_FLOAT_VALUE = 8,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_ABILITY_ELEMENT_STRENGTH = 9;
     */
    META_ABILITY_ELEMENT_STRENGTH = 9,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_ADD_OR_GET_ABILITY_AND_TRIGGER = 10;
     */
    META_ADD_OR_GET_ABILITY_AND_TRIGGER = 10,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_SET_KILLED_STATE = 11;
     */
    META_SET_KILLED_STATE = 11,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_SET_ABILITY_TRIGGER = 12;
     */
    META_SET_ABILITY_TRIGGER = 12,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_ADD_NEW_ABILITY = 13;
     */
    META_ADD_NEW_ABILITY = 13,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_REMOVE_ABILITY = 14;
     */
    META_REMOVE_ABILITY = 14,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_SET_MODIFIER_APPLY_ENTITY = 15;
     */
    META_SET_MODIFIER_APPLY_ENTITY = 15,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_MODIFIER_DURABILITY_CHANGE = 16;
     */
    META_MODIFIER_DURABILITY_CHANGE = 16,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_ELEMENT_REACTION_VISUAL = 17;
     */
    META_ELEMENT_REACTION_VISUAL = 17,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_SET_POSE_PARAMETER = 18;
     */
    META_SET_POSE_PARAMETER = 18,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_UPDATE_BASE_REACTION_DAMAGE = 19;
     */
    META_UPDATE_BASE_REACTION_DAMAGE = 19,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_TRIGGER_ELEMENT_REACTION = 20;
     */
    META_TRIGGER_ELEMENT_REACTION = 20,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_LOSE_HP = 21;
     */
    META_LOSE_HP = 21,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_META_DURABILITY_IS_ZERO = 22;
     */
    META_DURABILITY_IS_ZERO = 22,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_TRIGGER_ABILITY = 50;
     */
    ACTION_TRIGGER_ABILITY = 50,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_SET_CRASH_DAMAGE = 51;
     */
    ACTION_SET_CRASH_DAMAGE = 51,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_EFFECT = 52;
     */
    ACTION_EFFECT = 52,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_SUMMON = 53;
     */
    ACTION_SUMMON = 53,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_BLINK = 54;
     */
    ACTION_BLINK = 54,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_CREATE_GADGET = 55;
     */
    ACTION_CREATE_GADGET = 55,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_APPLY_LEVEL_MODIFIER = 56;
     */
    ACTION_APPLY_LEVEL_MODIFIER = 56,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_GENERATE_ELEM_BALL = 57;
     */
    ACTION_GENERATE_ELEM_BALL = 57,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_SET_RANDOM_OVERRIDE_MAP_VALUE = 58;
     */
    ACTION_SET_RANDOM_OVERRIDE_MAP_VALUE = 58,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_SERVER_MONSTER_LOG = 59;
     */
    ACTION_SERVER_MONSTER_LOG = 59,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_CREATE_TILE = 60;
     */
    ACTION_CREATE_TILE = 60,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_DESTROY_TILE = 61;
     */
    ACTION_DESTROY_TILE = 61,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_FIRE_AFTER_IMAGE = 62;
     */
    ACTION_FIRE_AFTER_IMAGE = 62,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_DEDUCT_STAMINA = 63;
     */
    ACTION_DEDUCT_STAMINA = 63,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_HIT_EFFECT = 64;
     */
    ACTION_HIT_EFFECT = 64,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_ACTION_SET_BULLET_TRACK_TARGET = 65;
     */
    ACTION_SET_BULLET_TRACK_TARGET = 65,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_AVATAR_STEER_BY_CAMERA = 100;
     */
    MIXIN_AVATAR_STEER_BY_CAMERA = 100,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_MONSTER_DEFEND = 101;
     */
    MIXIN_MONSTER_DEFEND = 101,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_WIND_ZONE = 102;
     */
    MIXIN_WIND_ZONE = 102,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_COST_STAMINA = 103;
     */
    MIXIN_COST_STAMINA = 103,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_ELITE_SHIELD = 104;
     */
    MIXIN_ELITE_SHIELD = 104,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_ELEMENT_SHIELD = 105;
     */
    MIXIN_ELEMENT_SHIELD = 105,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_GLOBAL_SHIELD = 106;
     */
    MIXIN_GLOBAL_SHIELD = 106,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_SHIELD_BAR = 107;
     */
    MIXIN_SHIELD_BAR = 107,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_WIND_SEED_SPAWNER = 108;
     */
    MIXIN_WIND_SEED_SPAWNER = 108,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_DO_ACTION_BY_ELEMENT_REACTION = 109;
     */
    MIXIN_DO_ACTION_BY_ELEMENT_REACTION = 109,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_FIELD_ENTITY_COUNT_CHANGE = 110;
     */
    MIXIN_FIELD_ENTITY_COUNT_CHANGE = 110,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_SCENE_PROP_SYNC = 111;
     */
    MIXIN_SCENE_PROP_SYNC = 111,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_WIDGET_MP_SUPPORT = 112;
     */
    MIXIN_WIDGET_MP_SUPPORT = 112,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_DO_ACTION_BY_SELF_MODIFIER_ELEMENT_DURABILITY_RATIO = 113;
     */
    MIXIN_DO_ACTION_BY_SELF_MODIFIER_ELEMENT_DURABILITY_RATIO = 113,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_FIREWORKS_LAUNCHER = 114;
     */
    MIXIN_FIREWORKS_LAUNCHER = 114,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_ATTACK_RESULT_CREATE_COUNT = 115;
     */
    MIXIN_ATTACK_RESULT_CREATE_COUNT = 115,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_UGC_TIME_CONTROL = 116;
     */
    MIXIN_UGC_TIME_CONTROL = 116,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_AVATAR_COMBAT = 117;
     */
    MIXIN_AVATAR_COMBAT = 117,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_DEATH_ZONE_REGIONAL_PLAY_MIXIN = 118;
     */
    MIXIN_DEATH_ZONE_REGIONAL_PLAY_MIXIN = 118,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_UI_INTERACT = 119;
     */
    MIXIN_UI_INTERACT = 119,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_SHOOT_FROM_CAMERA = 120;
     */
    MIXIN_SHOOT_FROM_CAMERA = 120,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_ERASE_BRICK_ACTIVITY = 121;
     */
    MIXIN_ERASE_BRICK_ACTIVITY = 121,
    /**
     * @generated from protobuf enum value: ABILITY_INVOKE_ARGUMENT_MIXIN_BREAKOUT = 122;
     */
    MIXIN_BREAKOUT = 122
}
