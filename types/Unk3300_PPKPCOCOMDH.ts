// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "Unk3300_PPKPCOCOMDH.proto" (syntax proto3)
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
import { GCGDuel } from "./GCGDuel";
/**
 * @generated from protobuf message Unk3300_PPKPCOCOMDH
 */
export interface Unk3300_PPKPCOCOMDH {
    /**
     * @generated from protobuf field: uint32 controller_id = 12;
     */
    controllerId: number;
    /**
     * @generated from protobuf field: uint32 op_seq = 13;
     */
    opSeq: number;
    /**
     * @generated from protobuf oneof: detail
     */
    detail: {
        oneofKind: "gmMsg";
        /**
         * @generated from protobuf field: string gm_msg = 2;
         */
        gmMsg: string;
    } | {
        oneofKind: "duel";
        /**
         * @generated from protobuf field: GCGDuel duel = 14;
         */
        duel: GCGDuel;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class Unk3300_PPKPCOCOMDH$Type extends MessageType<Unk3300_PPKPCOCOMDH> {
    constructor() {
        super("Unk3300_PPKPCOCOMDH", [
            { no: 12, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "op_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "gm_msg", kind: "scalar", oneof: "detail", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "duel", kind: "message", oneof: "detail", T: () => GCGDuel }
        ]);
    }
    create(value?: PartialMessage<Unk3300_PPKPCOCOMDH>): Unk3300_PPKPCOCOMDH {
        const message = { controllerId: 0, opSeq: 0, detail: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Unk3300_PPKPCOCOMDH>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Unk3300_PPKPCOCOMDH): Unk3300_PPKPCOCOMDH {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 controller_id */ 12:
                    message.controllerId = reader.uint32();
                    break;
                case /* uint32 op_seq */ 13:
                    message.opSeq = reader.uint32();
                    break;
                case /* string gm_msg */ 2:
                    message.detail = {
                        oneofKind: "gmMsg",
                        gmMsg: reader.string()
                    };
                    break;
                case /* GCGDuel duel */ 14:
                    message.detail = {
                        oneofKind: "duel",
                        duel: GCGDuel.internalBinaryRead(reader, reader.uint32(), options, (message.detail as any).duel)
                    };
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
    internalBinaryWrite(message: Unk3300_PPKPCOCOMDH, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 controller_id = 12; */
        if (message.controllerId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.controllerId);
        /* uint32 op_seq = 13; */
        if (message.opSeq !== 0)
            writer.tag(13, WireType.Varint).uint32(message.opSeq);
        /* string gm_msg = 2; */
        if (message.detail.oneofKind === "gmMsg")
            writer.tag(2, WireType.LengthDelimited).string(message.detail.gmMsg);
        /* GCGDuel duel = 14; */
        if (message.detail.oneofKind === "duel")
            GCGDuel.internalBinaryWrite(message.detail.duel, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Unk3300_PPKPCOCOMDH
 */
export const Unk3300_PPKPCOCOMDH = new Unk3300_PPKPCOCOMDH$Type();
