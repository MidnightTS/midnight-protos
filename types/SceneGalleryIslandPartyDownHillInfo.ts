// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "SceneGalleryIslandPartyDownHillInfo.proto" (syntax proto3)
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
import { GalleryStartSource } from "./GalleryStartSource";
/**
 * @generated from protobuf message SceneGalleryIslandPartyDownHillInfo
 */
export interface SceneGalleryIslandPartyDownHillInfo {
    /**
     * @generated from protobuf field: uint32 max_kill_monster_count = 10;
     */
    maxKillMonsterCount: number;
    /**
     * @generated from protobuf field: GalleryStartSource start_source = 2;
     */
    startSource: GalleryStartSource;
    /**
     * @generated from protobuf field: uint32 total_kill_monster_count = 12;
     */
    totalKillMonsterCount: number;
    /**
     * @generated from protobuf field: uint32 coin = 4;
     */
    coin: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryIslandPartyDownHillInfo$Type extends MessageType<SceneGalleryIslandPartyDownHillInfo> {
    constructor() {
        super("SceneGalleryIslandPartyDownHillInfo", [
            { no: 10, name: "max_kill_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "start_source", kind: "enum", T: () => ["GalleryStartSource", GalleryStartSource, "GALLERY_START_SOURCE_"] },
            { no: 12, name: "total_kill_monster_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "coin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<SceneGalleryIslandPartyDownHillInfo>): SceneGalleryIslandPartyDownHillInfo {
        const message = { maxKillMonsterCount: 0, startSource: 0, totalKillMonsterCount: 0, coin: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<SceneGalleryIslandPartyDownHillInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SceneGalleryIslandPartyDownHillInfo): SceneGalleryIslandPartyDownHillInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 max_kill_monster_count */ 10:
                    message.maxKillMonsterCount = reader.uint32();
                    break;
                case /* GalleryStartSource start_source */ 2:
                    message.startSource = reader.int32();
                    break;
                case /* uint32 total_kill_monster_count */ 12:
                    message.totalKillMonsterCount = reader.uint32();
                    break;
                case /* uint32 coin */ 4:
                    message.coin = reader.uint32();
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
    internalBinaryWrite(message: SceneGalleryIslandPartyDownHillInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 max_kill_monster_count = 10; */
        if (message.maxKillMonsterCount !== 0)
            writer.tag(10, WireType.Varint).uint32(message.maxKillMonsterCount);
        /* GalleryStartSource start_source = 2; */
        if (message.startSource !== 0)
            writer.tag(2, WireType.Varint).int32(message.startSource);
        /* uint32 total_kill_monster_count = 12; */
        if (message.totalKillMonsterCount !== 0)
            writer.tag(12, WireType.Varint).uint32(message.totalKillMonsterCount);
        /* uint32 coin = 4; */
        if (message.coin !== 0)
            writer.tag(4, WireType.Varint).uint32(message.coin);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryIslandPartyDownHillInfo
 */
export const SceneGalleryIslandPartyDownHillInfo = new SceneGalleryIslandPartyDownHillInfo$Type();
