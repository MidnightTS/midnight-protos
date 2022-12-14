// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "BlossomBriefInfo.proto" (syntax proto3)
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
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Vector } from "./Vector";
/**
 * @generated from protobuf message BlossomBriefInfo
 */
export interface BlossomBriefInfo {
    /**
     * @generated from protobuf field: Vector pos = 7;
     */
    pos?: Vector;
    /**
     * @generated from protobuf field: bool is_guide_opened = 15;
     */
    isGuideOpened: boolean;
    /**
     * @generated from protobuf field: uint32 reward_id = 3;
     */
    rewardId: number;
    /**
     * @generated from protobuf field: uint32 resin = 5;
     */
    resin: number;
    /**
     * @generated from protobuf field: uint32 city_id = 8;
     */
    cityId: number;
    /**
     * @generated from protobuf field: uint32 circle_camp_id = 10;
     */
    circleCampId: number;
    /**
     * @generated from protobuf field: uint32 state = 11;
     */
    state: number;
    /**
     * @generated from protobuf field: uint32 monster_level = 1;
     */
    monsterLevel: number;
    /**
     * @generated from protobuf field: uint32 scene_id = 4;
     */
    sceneId: number;
    /**
     * @generated from protobuf field: uint32 refresh_id = 14;
     */
    refreshId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class BlossomBriefInfo$Type extends MessageType<BlossomBriefInfo> {
    constructor() {
        super("BlossomBriefInfo", [
            { no: 7, name: "pos", kind: "message", T: () => Vector },
            { no: 15, name: "is_guide_opened", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "resin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "city_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "circle_camp_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "state", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "monster_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "refresh_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<BlossomBriefInfo>): BlossomBriefInfo {
        const message = { isGuideOpened: false, rewardId: 0, resin: 0, cityId: 0, circleCampId: 0, state: 0, monsterLevel: 0, sceneId: 0, refreshId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BlossomBriefInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BlossomBriefInfo): BlossomBriefInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Vector pos */ 7:
                    message.pos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* bool is_guide_opened */ 15:
                    message.isGuideOpened = reader.bool();
                    break;
                case /* uint32 reward_id */ 3:
                    message.rewardId = reader.uint32();
                    break;
                case /* uint32 resin */ 5:
                    message.resin = reader.uint32();
                    break;
                case /* uint32 city_id */ 8:
                    message.cityId = reader.uint32();
                    break;
                case /* uint32 circle_camp_id */ 10:
                    message.circleCampId = reader.uint32();
                    break;
                case /* uint32 state */ 11:
                    message.state = reader.uint32();
                    break;
                case /* uint32 monster_level */ 1:
                    message.monsterLevel = reader.uint32();
                    break;
                case /* uint32 scene_id */ 4:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 refresh_id */ 14:
                    message.refreshId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BlossomBriefInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Vector pos = 7; */
        if (message.pos)
            Vector.internalBinaryWrite(message.pos, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* bool is_guide_opened = 15; */
        if (message.isGuideOpened !== false)
            writer.tag(15, WireType.Varint).bool(message.isGuideOpened);
        /* uint32 reward_id = 3; */
        if (message.rewardId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.rewardId);
        /* uint32 resin = 5; */
        if (message.resin !== 0)
            writer.tag(5, WireType.Varint).uint32(message.resin);
        /* uint32 city_id = 8; */
        if (message.cityId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.cityId);
        /* uint32 circle_camp_id = 10; */
        if (message.circleCampId !== 0)
            writer.tag(10, WireType.Varint).uint32(message.circleCampId);
        /* uint32 state = 11; */
        if (message.state !== 0)
            writer.tag(11, WireType.Varint).uint32(message.state);
        /* uint32 monster_level = 1; */
        if (message.monsterLevel !== 0)
            writer.tag(1, WireType.Varint).uint32(message.monsterLevel);
        /* uint32 scene_id = 4; */
        if (message.sceneId !== 0)
            writer.tag(4, WireType.Varint).uint32(message.sceneId);
        /* uint32 refresh_id = 14; */
        if (message.refreshId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.refreshId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BlossomBriefInfo
 */
export const BlossomBriefInfo = new BlossomBriefInfo$Type();
