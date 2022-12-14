// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "VintageMarketFinishStorePlayRsp.proto" (syntax proto3)
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
 *   CMD_ID = 20941;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message VintageMarketFinishStorePlayRsp
 */
export interface VintageMarketFinishStorePlayRsp {
    /**
     * @generated from protobuf field: uint32 store_round = 10;
     */
    storeRound: number;
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_HJIHIOIGAPP = 15 [json_name = "Unk3300HJIHIOIGAPP"];
     */
    unk3300HJIHIOIGAPP: number[];
    /**
     * @generated from protobuf field: int32 retcode = 9;
     */
    retcode: number;
    /**
     * @generated from protobuf field: map<uint32, uint32> store_income_map = 2;
     */
    storeIncomeMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 Unk3300_DJILELFHFHJ = 6 [json_name = "Unk3300DJILELFHFHJ"];
     */
    unk3300DJILELFHFHJ: number;
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_OCIMKEPJOOL = 3 [json_name = "Unk3300OCIMKEPJOOL"];
     */
    unk3300OCIMKEPJOOL: number[];
    /**
     * @generated from protobuf field: uint32 Unk3300_GCDNOPJEIBG = 4 [json_name = "Unk3300GCDNOPJEIBG"];
     */
    unk3300GCDNOPJEIBG: number;
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_BDAIONEPKIK = 1 [json_name = "Unk3300BDAIONEPKIK"];
     */
    unk3300BDAIONEPKIK: number[];
    /**
     * @generated from protobuf field: uint32 Unk3300_DGECJOKMDGN = 11 [json_name = "Unk3300DGECJOKMDGN"];
     */
    unk3300DGECJOKMDGN: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_DLNFCBPDBBH = 14 [json_name = "Unk3300DLNFCBPDBBH"];
     */
    unk3300DLNFCBPDBBH: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class VintageMarketFinishStorePlayRsp$Type extends MessageType<VintageMarketFinishStorePlayRsp> {
    constructor() {
        super("VintageMarketFinishStorePlayRsp", [
            { no: 10, name: "store_round", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_HJIHIOIGAPP", kind: "scalar", jsonName: "Unk3300HJIHIOIGAPP", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "store_income_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 6, name: "Unk3300_DJILELFHFHJ", kind: "scalar", jsonName: "Unk3300DJILELFHFHJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_OCIMKEPJOOL", kind: "scalar", jsonName: "Unk3300OCIMKEPJOOL", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_GCDNOPJEIBG", kind: "scalar", jsonName: "Unk3300GCDNOPJEIBG", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_BDAIONEPKIK", kind: "scalar", jsonName: "Unk3300BDAIONEPKIK", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_DGECJOKMDGN", kind: "scalar", jsonName: "Unk3300DGECJOKMDGN", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_DLNFCBPDBBH", kind: "scalar", jsonName: "Unk3300DLNFCBPDBBH", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<VintageMarketFinishStorePlayRsp>): VintageMarketFinishStorePlayRsp {
        const message = { storeRound: 0, unk3300HJIHIOIGAPP: [], retcode: 0, storeIncomeMap: {}, unk3300DJILELFHFHJ: 0, unk3300OCIMKEPJOOL: [], unk3300GCDNOPJEIBG: 0, unk3300BDAIONEPKIK: [], unk3300DGECJOKMDGN: 0, unk3300DLNFCBPDBBH: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VintageMarketFinishStorePlayRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VintageMarketFinishStorePlayRsp): VintageMarketFinishStorePlayRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 store_round */ 10:
                    message.storeRound = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_HJIHIOIGAPP = 15 [json_name = "Unk3300HJIHIOIGAPP"];*/ 15:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300HJIHIOIGAPP.push(reader.uint32());
                    else
                        message.unk3300HJIHIOIGAPP.push(reader.uint32());
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* map<uint32, uint32> store_income_map */ 2:
                    this.binaryReadMap2(message.storeIncomeMap, reader, options);
                    break;
                case /* uint32 Unk3300_DJILELFHFHJ = 6 [json_name = "Unk3300DJILELFHFHJ"];*/ 6:
                    message.unk3300DJILELFHFHJ = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_OCIMKEPJOOL = 3 [json_name = "Unk3300OCIMKEPJOOL"];*/ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300OCIMKEPJOOL.push(reader.uint32());
                    else
                        message.unk3300OCIMKEPJOOL.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_GCDNOPJEIBG = 4 [json_name = "Unk3300GCDNOPJEIBG"];*/ 4:
                    message.unk3300GCDNOPJEIBG = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_BDAIONEPKIK = 1 [json_name = "Unk3300BDAIONEPKIK"];*/ 1:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300BDAIONEPKIK.push(reader.uint32());
                    else
                        message.unk3300BDAIONEPKIK.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_DGECJOKMDGN = 11 [json_name = "Unk3300DGECJOKMDGN"];*/ 11:
                    message.unk3300DGECJOKMDGN = reader.uint32();
                    break;
                case /* uint32 Unk3300_DLNFCBPDBBH = 14 [json_name = "Unk3300DLNFCBPDBBH"];*/ 14:
                    message.unk3300DLNFCBPDBBH = reader.uint32();
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
    private binaryReadMap2(map: VintageMarketFinishStorePlayRsp["storeIncomeMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof VintageMarketFinishStorePlayRsp["storeIncomeMap"] | undefined, val: VintageMarketFinishStorePlayRsp["storeIncomeMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field VintageMarketFinishStorePlayRsp.store_income_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: VintageMarketFinishStorePlayRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 store_round = 10; */
        if (message.storeRound !== 0)
            writer.tag(10, WireType.Varint).uint32(message.storeRound);
        /* repeated uint32 Unk3300_HJIHIOIGAPP = 15 [json_name = "Unk3300HJIHIOIGAPP"]; */
        if (message.unk3300HJIHIOIGAPP.length) {
            writer.tag(15, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300HJIHIOIGAPP.length; i++)
                writer.uint32(message.unk3300HJIHIOIGAPP[i]);
            writer.join();
        }
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, WireType.Varint).int32(message.retcode);
        /* map<uint32, uint32> store_income_map = 2; */
        for (let k of Object.keys(message.storeIncomeMap))
            writer.tag(2, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.storeIncomeMap[k as any]).join();
        /* uint32 Unk3300_DJILELFHFHJ = 6 [json_name = "Unk3300DJILELFHFHJ"]; */
        if (message.unk3300DJILELFHFHJ !== 0)
            writer.tag(6, WireType.Varint).uint32(message.unk3300DJILELFHFHJ);
        /* repeated uint32 Unk3300_OCIMKEPJOOL = 3 [json_name = "Unk3300OCIMKEPJOOL"]; */
        if (message.unk3300OCIMKEPJOOL.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300OCIMKEPJOOL.length; i++)
                writer.uint32(message.unk3300OCIMKEPJOOL[i]);
            writer.join();
        }
        /* uint32 Unk3300_GCDNOPJEIBG = 4 [json_name = "Unk3300GCDNOPJEIBG"]; */
        if (message.unk3300GCDNOPJEIBG !== 0)
            writer.tag(4, WireType.Varint).uint32(message.unk3300GCDNOPJEIBG);
        /* repeated uint32 Unk3300_BDAIONEPKIK = 1 [json_name = "Unk3300BDAIONEPKIK"]; */
        if (message.unk3300BDAIONEPKIK.length) {
            writer.tag(1, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300BDAIONEPKIK.length; i++)
                writer.uint32(message.unk3300BDAIONEPKIK[i]);
            writer.join();
        }
        /* uint32 Unk3300_DGECJOKMDGN = 11 [json_name = "Unk3300DGECJOKMDGN"]; */
        if (message.unk3300DGECJOKMDGN !== 0)
            writer.tag(11, WireType.Varint).uint32(message.unk3300DGECJOKMDGN);
        /* uint32 Unk3300_DLNFCBPDBBH = 14 [json_name = "Unk3300DLNFCBPDBBH"]; */
        if (message.unk3300DLNFCBPDBBH !== 0)
            writer.tag(14, WireType.Varint).uint32(message.unk3300DLNFCBPDBBH);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message VintageMarketFinishStorePlayRsp
 */
export const VintageMarketFinishStorePlayRsp = new VintageMarketFinishStorePlayRsp$Type();
