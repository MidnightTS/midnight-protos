// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GCGActionType.proto" (syntax proto3)
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
 * @generated from protobuf enum GCGActionType
 */
export enum GCGActionType {
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_NONE = 0;
     */
    GCG_ACTION_TYPE_NONE = 0,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_SPECIAL_PHASE = 1;
     */
    GCG_ACTION_TYPE_SPECIAL_PHASE = 1,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_NEXT_PHASE = 2;
     */
    GCG_ACTION_TYPE_NEXT_PHASE = 2,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_DRAW = 3;
     */
    GCG_ACTION_TYPE_DRAW = 3,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_REDRAW = 4;
     */
    GCG_ACTION_TYPE_REDRAW = 4,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_SELECT_ONSTAGE = 5;
     */
    GCG_ACTION_TYPE_SELECT_ONSTAGE = 5,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_ROLL = 6;
     */
    GCG_ACTION_TYPE_ROLL = 6,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_REROLL = 7;
     */
    GCG_ACTION_TYPE_REROLL = 7,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_ATTACK = 8;
     */
    GCG_ACTION_TYPE_ATTACK = 8,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_PLAY_CARD = 9;
     */
    GCG_ACTION_TYPE_PLAY_CARD = 9,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_PASS = 10;
     */
    GCG_ACTION_TYPE_PASS = 10,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_REBOOT = 11;
     */
    GCG_ACTION_TYPE_REBOOT = 11,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_GAME_OVER = 12;
     */
    GCG_ACTION_TYPE_GAME_OVER = 12,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_TRIGGER = 13;
     */
    GCG_ACTION_TYPE_TRIGGER = 13,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_PHASE_EXIT = 14;
     */
    GCG_ACTION_TYPE_PHASE_EXIT = 14,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_CUSTOM = 15;
     */
    GCG_ACTION_TYPE_CUSTOM = 15,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_NOTIFY_COST = 16;
     */
    GCG_ACTION_TYPE_NOTIFY_COST = 16,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_AFTER_OPERATION = 17;
     */
    GCG_ACTION_TYPE_AFTER_OPERATION = 17,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_USE_SKILL = 18;
     */
    GCG_ACTION_TYPE_USE_SKILL = 18,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_NOTIFY_SKILL_PREVIEW = 19;
     */
    GCG_ACTION_TYPE_NOTIFY_SKILL_PREVIEW = 19,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_PREVIEW_ATTACK = 20;
     */
    GCG_ACTION_TYPE_PREVIEW_ATTACK = 20,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_PREVIEW_AFTER_ATTACK = 21;
     */
    GCG_ACTION_TYPE_PREVIEW_AFTER_ATTACK = 21,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_SEND_MESSAGE = 22;
     */
    GCG_ACTION_TYPE_SEND_MESSAGE = 22,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_WAITING_CHARACTER = 23;
     */
    GCG_ACTION_TYPE_WAITING_CHARACTER = 23,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_TRIGGER_SKILL = 24;
     */
    GCG_ACTION_TYPE_TRIGGER_SKILL = 24,
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_BEFORE_NEXT_OPERATION = 25;
     */
    GCG_ACTION_TYPE_BEFORE_NEXT_OPERATION = 25
}