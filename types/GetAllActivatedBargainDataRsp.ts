// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GetAllActivatedBargainDataRsp.proto" (syntax proto3)
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
import { BargainSnapshot } from "./BargainSnapshot";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 433;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GetAllActivatedBargainDataRsp
 */
export interface GetAllActivatedBargainDataRsp {
    /**
     * @generated from protobuf field: int32 retcode = 12;
     */
    retcode: number;
    /**
     * @generated from protobuf field: repeated BargainSnapshot snapshot_list = 6;
     */
    snapshotList: BargainSnapshot[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GetAllActivatedBargainDataRsp$Type extends MessageType<GetAllActivatedBargainDataRsp> {
    constructor() {
        super("GetAllActivatedBargainDataRsp", [
            { no: 12, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "snapshot_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BargainSnapshot }
        ]);
    }
    create(value?: PartialMessage<GetAllActivatedBargainDataRsp>): GetAllActivatedBargainDataRsp {
        const message = { retcode: 0, snapshotList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetAllActivatedBargainDataRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAllActivatedBargainDataRsp): GetAllActivatedBargainDataRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 12:
                    message.retcode = reader.int32();
                    break;
                case /* repeated BargainSnapshot snapshot_list */ 6:
                    message.snapshotList.push(BargainSnapshot.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GetAllActivatedBargainDataRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 retcode = 12; */
        if (message.retcode !== 0)
            writer.tag(12, WireType.Varint).int32(message.retcode);
        /* repeated BargainSnapshot snapshot_list = 6; */
        for (let i = 0; i < message.snapshotList.length; i++)
            BargainSnapshot.internalBinaryWrite(message.snapshotList[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetAllActivatedBargainDataRsp
 */
export const GetAllActivatedBargainDataRsp = new GetAllActivatedBargainDataRsp$Type();
