// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "GCGOperationReplay.proto" (syntax proto3)
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
import { GCGReplayControllerData } from "./GCGReplayControllerData";
import { GCGReplayOperationData } from "./GCGReplayOperationData";
import { Unk3300_PPKPCOCOMDH } from "./Unk3300_PPKPCOCOMDH";
/**
 * @generated from protobuf message GCGOperationReplay
 */
export interface GCGOperationReplay {
    /**
     * @generated from protobuf field: repeated Unk3300_PPKPCOCOMDH Unk3300_FKBLJIMBHEA = 6 [json_name = "Unk3300FKBLJIMBHEA"];
     */
    unk3300FKBLJIMBHEA: Unk3300_PPKPCOCOMDH[];
    /**
     * @generated from protobuf field: uint32 seed = 1;
     */
    seed: number;
    /**
     * @generated from protobuf field: repeated GCGReplayOperationData operation_data_list = 8;
     */
    operationDataList: GCGReplayOperationData[];
    /**
     * @generated from protobuf field: uint32 game_id = 2;
     */
    gameId: number;
    /**
     * @generated from protobuf field: repeated GCGReplayControllerData controller_data_list = 7;
     */
    controllerDataList: GCGReplayControllerData[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperationReplay$Type extends MessageType<GCGOperationReplay> {
    constructor() {
        super("GCGOperationReplay", [
            { no: 6, name: "Unk3300_FKBLJIMBHEA", kind: "message", jsonName: "Unk3300FKBLJIMBHEA", repeat: 1 /*RepeatType.PACKED*/, T: () => Unk3300_PPKPCOCOMDH },
            { no: 1, name: "seed", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "operation_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGReplayOperationData },
            { no: 2, name: "game_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "controller_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGReplayControllerData }
        ]);
    }
    create(value?: PartialMessage<GCGOperationReplay>): GCGOperationReplay {
        const message = { unk3300FKBLJIMBHEA: [], seed: 0, operationDataList: [], gameId: 0, controllerDataList: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GCGOperationReplay>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GCGOperationReplay): GCGOperationReplay {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated Unk3300_PPKPCOCOMDH Unk3300_FKBLJIMBHEA = 6 [json_name = "Unk3300FKBLJIMBHEA"];*/ 6:
                    message.unk3300FKBLJIMBHEA.push(Unk3300_PPKPCOCOMDH.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 seed */ 1:
                    message.seed = reader.uint32();
                    break;
                case /* repeated GCGReplayOperationData operation_data_list */ 8:
                    message.operationDataList.push(GCGReplayOperationData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 game_id */ 2:
                    message.gameId = reader.uint32();
                    break;
                case /* repeated GCGReplayControllerData controller_data_list */ 7:
                    message.controllerDataList.push(GCGReplayControllerData.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GCGOperationReplay, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated Unk3300_PPKPCOCOMDH Unk3300_FKBLJIMBHEA = 6 [json_name = "Unk3300FKBLJIMBHEA"]; */
        for (let i = 0; i < message.unk3300FKBLJIMBHEA.length; i++)
            Unk3300_PPKPCOCOMDH.internalBinaryWrite(message.unk3300FKBLJIMBHEA[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* uint32 seed = 1; */
        if (message.seed !== 0)
            writer.tag(1, WireType.Varint).uint32(message.seed);
        /* repeated GCGReplayOperationData operation_data_list = 8; */
        for (let i = 0; i < message.operationDataList.length; i++)
            GCGReplayOperationData.internalBinaryWrite(message.operationDataList[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* uint32 game_id = 2; */
        if (message.gameId !== 0)
            writer.tag(2, WireType.Varint).uint32(message.gameId);
        /* repeated GCGReplayControllerData controller_data_list = 7; */
        for (let i = 0; i < message.controllerDataList.length; i++)
            GCGReplayControllerData.internalBinaryWrite(message.controllerDataList[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGOperationReplay
 */
export const GCGOperationReplay = new GCGOperationReplay$Type();