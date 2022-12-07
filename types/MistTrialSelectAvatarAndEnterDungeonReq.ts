// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "MistTrialSelectAvatarAndEnterDungeonReq.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 8226;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message MistTrialSelectAvatarAndEnterDungeonReq
 */
export interface MistTrialSelectAvatarAndEnterDungeonReq {
    /**
     * @generated from protobuf field: repeated MistTrialSelectAvatarAndEnterDungeonReq.SelectAvatarIndex select_avatar_index_list = 11;
     */
    selectAvatarIndexList: MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex[];
    /**
     * @generated from protobuf field: repeated uint32 select_trial_avatar_id_list = 1;
     */
    selectTrialAvatarIdList: number[];
    /**
     * @generated from protobuf field: uint32 enter_point_id = 8;
     */
    enterPointId: number;
    /**
     * @generated from protobuf field: uint32 trial_id = 5;
     */
    trialId: number;
}
/**
 * @generated from protobuf message MistTrialSelectAvatarAndEnterDungeonReq.SelectAvatarIndex
 */
export interface MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex {
}
// @generated message type with reflection information, may provide speed optimized methods
class MistTrialSelectAvatarAndEnterDungeonReq$Type extends MessageType<MistTrialSelectAvatarAndEnterDungeonReq> {
    constructor() {
        super("MistTrialSelectAvatarAndEnterDungeonReq", [
            { no: 11, name: "select_avatar_index_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex },
            { no: 1, name: "select_trial_avatar_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "enter_point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "trial_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<MistTrialSelectAvatarAndEnterDungeonReq>): MistTrialSelectAvatarAndEnterDungeonReq {
        const message = { selectAvatarIndexList: [], selectTrialAvatarIdList: [], enterPointId: 0, trialId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MistTrialSelectAvatarAndEnterDungeonReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MistTrialSelectAvatarAndEnterDungeonReq): MistTrialSelectAvatarAndEnterDungeonReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated MistTrialSelectAvatarAndEnterDungeonReq.SelectAvatarIndex select_avatar_index_list */ 11:
                    message.selectAvatarIndexList.push(MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 select_trial_avatar_id_list */ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.selectTrialAvatarIdList.push(reader.uint32());
                    else
                        message.selectTrialAvatarIdList.push(reader.uint32());
                    break;
                case /* uint32 enter_point_id */ 8:
                    message.enterPointId = reader.uint32();
                    break;
                case /* uint32 trial_id */ 5:
                    message.trialId = reader.uint32();
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
    internalBinaryWrite(message: MistTrialSelectAvatarAndEnterDungeonReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated MistTrialSelectAvatarAndEnterDungeonReq.SelectAvatarIndex select_avatar_index_list = 11; */
        for (let i = 0; i < message.selectAvatarIndexList.length; i++)
            MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex.internalBinaryWrite(message.selectAvatarIndexList[i], writer.tag(11, WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 select_trial_avatar_id_list = 1; */
        if (message.selectTrialAvatarIdList.length) {
            writer.tag(1, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.selectTrialAvatarIdList.length; i++)
                writer.uint32(message.selectTrialAvatarIdList[i]);
            writer.join();
        }
        /* uint32 enter_point_id = 8; */
        if (message.enterPointId !== 0)
            writer.tag(8, WireType.Varint).uint32(message.enterPointId);
        /* uint32 trial_id = 5; */
        if (message.trialId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.trialId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MistTrialSelectAvatarAndEnterDungeonReq
 */
export const MistTrialSelectAvatarAndEnterDungeonReq = new MistTrialSelectAvatarAndEnterDungeonReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex$Type extends MessageType<MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex> {
    constructor() {
        super("MistTrialSelectAvatarAndEnterDungeonReq.SelectAvatarIndex", []);
    }
    create(value?: PartialMessage<MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex>): MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex): MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex {
        return target ?? this.create();
    }
    internalBinaryWrite(message: MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MistTrialSelectAvatarAndEnterDungeonReq.SelectAvatarIndex
 */
export const MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex = new MistTrialSelectAvatarAndEnterDungeonReq_SelectAvatarIndex$Type();