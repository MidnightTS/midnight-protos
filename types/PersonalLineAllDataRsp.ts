// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "PersonalLineAllDataRsp.proto" (syntax proto3)
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
import { LockedPersonallineData } from "./LockedPersonallineData";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 495;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message PersonalLineAllDataRsp
 */
export interface PersonalLineAllDataRsp {
    /**
     * @generated from protobuf field: uint32 cur_finished_daily_task_count = 12;
     */
    curFinishedDailyTaskCount: number;
    /**
     * @generated from protobuf field: repeated LockedPersonallineData locked_personal_line_list = 10;
     */
    lockedPersonalLineList: LockedPersonallineData[];
    /**
     * @generated from protobuf field: int32 retcode = 2;
     */
    retcode: number;
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_BHLEGLEICFJ = 1 [json_name = "Unk3300BHLEGLEICFJ"];
     */
    unk3300BHLEGLEICFJ: number[];
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_BGCIGNEGBIN = 6 [json_name = "Unk3300BGCIGNEGBIN"];
     */
    unk3300BGCIGNEGBIN: number[];
    /**
     * @generated from protobuf field: uint32 legendary_key_count = 5;
     */
    legendaryKeyCount: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class PersonalLineAllDataRsp$Type extends MessageType<PersonalLineAllDataRsp> {
    constructor() {
        super("PersonalLineAllDataRsp", [
            { no: 12, name: "cur_finished_daily_task_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "locked_personal_line_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LockedPersonallineData },
            { no: 2, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "Unk3300_BHLEGLEICFJ", kind: "scalar", jsonName: "Unk3300BHLEGLEICFJ", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_BGCIGNEGBIN", kind: "scalar", jsonName: "Unk3300BGCIGNEGBIN", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "legendary_key_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<PersonalLineAllDataRsp>): PersonalLineAllDataRsp {
        const message = { curFinishedDailyTaskCount: 0, lockedPersonalLineList: [], retcode: 0, unk3300BHLEGLEICFJ: [], unk3300BGCIGNEGBIN: [], legendaryKeyCount: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PersonalLineAllDataRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PersonalLineAllDataRsp): PersonalLineAllDataRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 cur_finished_daily_task_count */ 12:
                    message.curFinishedDailyTaskCount = reader.uint32();
                    break;
                case /* repeated LockedPersonallineData locked_personal_line_list */ 10:
                    message.lockedPersonalLineList.push(LockedPersonallineData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 2:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 Unk3300_BHLEGLEICFJ = 1 [json_name = "Unk3300BHLEGLEICFJ"];*/ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300BHLEGLEICFJ.push(reader.uint32());
                    else
                        message.unk3300BHLEGLEICFJ.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_BGCIGNEGBIN = 6 [json_name = "Unk3300BGCIGNEGBIN"];*/ 6:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300BGCIGNEGBIN.push(reader.uint32());
                    else
                        message.unk3300BGCIGNEGBIN.push(reader.uint32());
                    break;
                case /* uint32 legendary_key_count */ 5:
                    message.legendaryKeyCount = reader.uint32();
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
    internalBinaryWrite(message: PersonalLineAllDataRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 cur_finished_daily_task_count = 12; */
        if (message.curFinishedDailyTaskCount !== 0)
            writer.tag(12, WireType.Varint).uint32(message.curFinishedDailyTaskCount);
        /* repeated LockedPersonallineData locked_personal_line_list = 10; */
        for (let i = 0; i < message.lockedPersonalLineList.length; i++)
            LockedPersonallineData.internalBinaryWrite(message.lockedPersonalLineList[i], writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 2; */
        if (message.retcode !== 0)
            writer.tag(2, WireType.Varint).int32(message.retcode);
        /* repeated uint32 Unk3300_BHLEGLEICFJ = 1 [json_name = "Unk3300BHLEGLEICFJ"]; */
        if (message.unk3300BHLEGLEICFJ.length) {
            writer.tag(1, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300BHLEGLEICFJ.length; i++)
                writer.uint32(message.unk3300BHLEGLEICFJ[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_BGCIGNEGBIN = 6 [json_name = "Unk3300BGCIGNEGBIN"]; */
        if (message.unk3300BGCIGNEGBIN.length) {
            writer.tag(6, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300BGCIGNEGBIN.length; i++)
                writer.uint32(message.unk3300BGCIGNEGBIN[i]);
            writer.join();
        }
        /* uint32 legendary_key_count = 5; */
        if (message.legendaryKeyCount !== 0)
            writer.tag(5, WireType.Varint).uint32(message.legendaryKeyCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PersonalLineAllDataRsp
 */
export const PersonalLineAllDataRsp = new PersonalLineAllDataRsp$Type();