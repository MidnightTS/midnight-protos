"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGActionType = void 0;
// @generated by protobuf-ts 2.8.2 with parameter output_typescript
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
var GCGActionType;
(function (GCGActionType) {
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_NONE = 0;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_NONE"] = 0] = "GCG_ACTION_TYPE_NONE";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_SPECIAL_PHASE = 1;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_SPECIAL_PHASE"] = 1] = "GCG_ACTION_TYPE_SPECIAL_PHASE";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_NEXT_PHASE = 2;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_NEXT_PHASE"] = 2] = "GCG_ACTION_TYPE_NEXT_PHASE";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_DRAW = 3;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_DRAW"] = 3] = "GCG_ACTION_TYPE_DRAW";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_REDRAW = 4;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_REDRAW"] = 4] = "GCG_ACTION_TYPE_REDRAW";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_SELECT_ONSTAGE = 5;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_SELECT_ONSTAGE"] = 5] = "GCG_ACTION_TYPE_SELECT_ONSTAGE";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_ROLL = 6;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_ROLL"] = 6] = "GCG_ACTION_TYPE_ROLL";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_REROLL = 7;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_REROLL"] = 7] = "GCG_ACTION_TYPE_REROLL";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_ATTACK = 8;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_ATTACK"] = 8] = "GCG_ACTION_TYPE_ATTACK";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_PLAY_CARD = 9;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_PLAY_CARD"] = 9] = "GCG_ACTION_TYPE_PLAY_CARD";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_PASS = 10;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_PASS"] = 10] = "GCG_ACTION_TYPE_PASS";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_REBOOT = 11;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_REBOOT"] = 11] = "GCG_ACTION_TYPE_REBOOT";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_GAME_OVER = 12;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_GAME_OVER"] = 12] = "GCG_ACTION_TYPE_GAME_OVER";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_TRIGGER = 13;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_TRIGGER"] = 13] = "GCG_ACTION_TYPE_TRIGGER";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_PHASE_EXIT = 14;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_PHASE_EXIT"] = 14] = "GCG_ACTION_TYPE_PHASE_EXIT";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_CUSTOM = 15;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_CUSTOM"] = 15] = "GCG_ACTION_TYPE_CUSTOM";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_NOTIFY_COST = 16;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_NOTIFY_COST"] = 16] = "GCG_ACTION_TYPE_NOTIFY_COST";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_AFTER_OPERATION = 17;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_AFTER_OPERATION"] = 17] = "GCG_ACTION_TYPE_AFTER_OPERATION";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_USE_SKILL = 18;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_USE_SKILL"] = 18] = "GCG_ACTION_TYPE_USE_SKILL";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_NOTIFY_SKILL_PREVIEW = 19;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_NOTIFY_SKILL_PREVIEW"] = 19] = "GCG_ACTION_TYPE_NOTIFY_SKILL_PREVIEW";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_PREVIEW_ATTACK = 20;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_PREVIEW_ATTACK"] = 20] = "GCG_ACTION_TYPE_PREVIEW_ATTACK";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_PREVIEW_AFTER_ATTACK = 21;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_PREVIEW_AFTER_ATTACK"] = 21] = "GCG_ACTION_TYPE_PREVIEW_AFTER_ATTACK";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_SEND_MESSAGE = 22;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_SEND_MESSAGE"] = 22] = "GCG_ACTION_TYPE_SEND_MESSAGE";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_WAITING_CHARACTER = 23;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_WAITING_CHARACTER"] = 23] = "GCG_ACTION_TYPE_WAITING_CHARACTER";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_TRIGGER_SKILL = 24;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_TRIGGER_SKILL"] = 24] = "GCG_ACTION_TYPE_TRIGGER_SKILL";
    /**
     * @generated from protobuf enum value: GCG_ACTION_TYPE_BEFORE_NEXT_OPERATION = 25;
     */
    GCGActionType[GCGActionType["GCG_ACTION_TYPE_BEFORE_NEXT_OPERATION"] = 25] = "GCG_ACTION_TYPE_BEFORE_NEXT_OPERATION";
})(GCGActionType = exports.GCGActionType || (exports.GCGActionType = {}));
