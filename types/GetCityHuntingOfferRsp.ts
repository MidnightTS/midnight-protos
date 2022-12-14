// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "GetCityHuntingOfferRsp.proto" (syntax proto3)
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
import { HuntingPair } from "./HuntingPair";
import { HuntingOfferData } from "./HuntingOfferData";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 4335;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message GetCityHuntingOfferRsp
 */
export interface GetCityHuntingOfferRsp {
    /**
     * @generated from protobuf field: repeated HuntingOfferData hunting_offer_list = 2;
     */
    huntingOfferList: HuntingOfferData[];
    /**
     * @generated from protobuf field: int32 retcode = 9;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 cur_week_finished_count = 1;
     */
    curWeekFinishedCount: number;
    /**
     * @generated from protobuf field: HuntingPair ongoing_hunting_pair = 15;
     */
    ongoingHuntingPair?: HuntingPair;
    /**
     * @generated from protobuf field: uint32 next_refresh_time = 5;
     */
    nextRefreshTime: number;
    /**
     * @generated from protobuf field: uint32 city_id = 12;
     */
    cityId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetCityHuntingOfferRsp$Type extends MessageType<GetCityHuntingOfferRsp> {
    constructor() {
        super("GetCityHuntingOfferRsp", [
            { no: 2, name: "hunting_offer_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HuntingOfferData },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "cur_week_finished_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "ongoing_hunting_pair", kind: "message", T: () => HuntingPair },
            { no: 5, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "city_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<GetCityHuntingOfferRsp>): GetCityHuntingOfferRsp {
        const message = { huntingOfferList: [], retcode: 0, curWeekFinishedCount: 0, nextRefreshTime: 0, cityId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetCityHuntingOfferRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCityHuntingOfferRsp): GetCityHuntingOfferRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated HuntingOfferData hunting_offer_list */ 2:
                    message.huntingOfferList.push(HuntingOfferData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 cur_week_finished_count */ 1:
                    message.curWeekFinishedCount = reader.uint32();
                    break;
                case /* HuntingPair ongoing_hunting_pair */ 15:
                    message.ongoingHuntingPair = HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.ongoingHuntingPair);
                    break;
                case /* uint32 next_refresh_time */ 5:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* uint32 city_id */ 12:
                    message.cityId = reader.uint32();
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
    internalBinaryWrite(message: GetCityHuntingOfferRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated HuntingOfferData hunting_offer_list = 2; */
        for (let i = 0; i < message.huntingOfferList.length; i++)
            HuntingOfferData.internalBinaryWrite(message.huntingOfferList[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, WireType.Varint).int32(message.retcode);
        /* uint32 cur_week_finished_count = 1; */
        if (message.curWeekFinishedCount !== 0)
            writer.tag(1, WireType.Varint).uint32(message.curWeekFinishedCount);
        /* HuntingPair ongoing_hunting_pair = 15; */
        if (message.ongoingHuntingPair)
            HuntingPair.internalBinaryWrite(message.ongoingHuntingPair, writer.tag(15, WireType.LengthDelimited).fork(), options).join();
        /* uint32 next_refresh_time = 5; */
        if (message.nextRefreshTime !== 0)
            writer.tag(5, WireType.Varint).uint32(message.nextRefreshTime);
        /* uint32 city_id = 12; */
        if (message.cityId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.cityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetCityHuntingOfferRsp
 */
export const GetCityHuntingOfferRsp = new GetCityHuntingOfferRsp$Type();
