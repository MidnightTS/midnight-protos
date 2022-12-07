// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "MistTrialLevelData.proto" (syntax proto3)
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
import { MistTrialBestAvatar } from "./MistTrialBestAvatar";
/**
 * @generated from protobuf message MistTrialLevelData
 */
export interface MistTrialLevelData {
    /**
     * @generated from protobuf field: uint32 open_time = 10;
     */
    openTime: number;
    /**
     * @generated from protobuf field: repeated MistTrialBestAvatar best_avatar_list = 3;
     */
    bestAvatarList: MistTrialBestAvatar[];
    /**
     * @generated from protobuf field: uint32 level_id = 14;
     */
    levelId: number;
    /**
     * @generated from protobuf field: uint32 first_pass_time = 1;
     */
    firstPassTime: number;
    /**
     * @generated from protobuf field: MistTrialBestAvatar best_hit_avatar = 11;
     */
    bestHitAvatar?: MistTrialBestAvatar;
    /**
     * @generated from protobuf field: bool is_open = 9;
     */
    isOpen: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class MistTrialLevelData$Type extends MessageType<MistTrialLevelData> {
    constructor() {
        super("MistTrialLevelData", [
            { no: 10, name: "open_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "best_avatar_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MistTrialBestAvatar },
            { no: 14, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "first_pass_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "best_hit_avatar", kind: "message", T: () => MistTrialBestAvatar },
            { no: 9, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<MistTrialLevelData>): MistTrialLevelData {
        const message = { openTime: 0, bestAvatarList: [], levelId: 0, firstPassTime: 0, isOpen: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MistTrialLevelData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MistTrialLevelData): MistTrialLevelData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 open_time */ 10:
                    message.openTime = reader.uint32();
                    break;
                case /* repeated MistTrialBestAvatar best_avatar_list */ 3:
                    message.bestAvatarList.push(MistTrialBestAvatar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 level_id */ 14:
                    message.levelId = reader.uint32();
                    break;
                case /* uint32 first_pass_time */ 1:
                    message.firstPassTime = reader.uint32();
                    break;
                case /* MistTrialBestAvatar best_hit_avatar */ 11:
                    message.bestHitAvatar = MistTrialBestAvatar.internalBinaryRead(reader, reader.uint32(), options, message.bestHitAvatar);
                    break;
                case /* bool is_open */ 9:
                    message.isOpen = reader.bool();
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
    internalBinaryWrite(message: MistTrialLevelData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 open_time = 10; */
        if (message.openTime !== 0)
            writer.tag(10, WireType.Varint).uint32(message.openTime);
        /* repeated MistTrialBestAvatar best_avatar_list = 3; */
        for (let i = 0; i < message.bestAvatarList.length; i++)
            MistTrialBestAvatar.internalBinaryWrite(message.bestAvatarList[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* uint32 level_id = 14; */
        if (message.levelId !== 0)
            writer.tag(14, WireType.Varint).uint32(message.levelId);
        /* uint32 first_pass_time = 1; */
        if (message.firstPassTime !== 0)
            writer.tag(1, WireType.Varint).uint32(message.firstPassTime);
        /* MistTrialBestAvatar best_hit_avatar = 11; */
        if (message.bestHitAvatar)
            MistTrialBestAvatar.internalBinaryWrite(message.bestHitAvatar, writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* bool is_open = 9; */
        if (message.isOpen !== false)
            writer.tag(9, WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MistTrialLevelData
 */
export const MistTrialLevelData = new MistTrialLevelData$Type();