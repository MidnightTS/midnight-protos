"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCityHuntingOfferRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HuntingPair_1 = require("./HuntingPair");
const HuntingOfferData_1 = require("./HuntingOfferData");
// @generated message type with reflection information, may provide speed optimized methods
class GetCityHuntingOfferRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetCityHuntingOfferRsp", [
            { no: 2, name: "hunting_offer_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HuntingOfferData_1.HuntingOfferData },
            { no: 9, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 1, name: "cur_week_finished_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "ongoing_hunting_pair", kind: "message", T: () => HuntingPair_1.HuntingPair },
            { no: 5, name: "next_refresh_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "city_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { huntingOfferList: [], retcode: 0, curWeekFinishedCount: 0, nextRefreshTime: 0, cityId: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated HuntingOfferData hunting_offer_list */ 2:
                    message.huntingOfferList.push(HuntingOfferData_1.HuntingOfferData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 9:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 cur_week_finished_count */ 1:
                    message.curWeekFinishedCount = reader.uint32();
                    break;
                case /* HuntingPair ongoing_hunting_pair */ 15:
                    message.ongoingHuntingPair = HuntingPair_1.HuntingPair.internalBinaryRead(reader, reader.uint32(), options, message.ongoingHuntingPair);
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated HuntingOfferData hunting_offer_list = 2; */
        for (let i = 0; i < message.huntingOfferList.length; i++)
            HuntingOfferData_1.HuntingOfferData.internalBinaryWrite(message.huntingOfferList[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 9; */
        if (message.retcode !== 0)
            writer.tag(9, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 cur_week_finished_count = 1; */
        if (message.curWeekFinishedCount !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.curWeekFinishedCount);
        /* HuntingPair ongoing_hunting_pair = 15; */
        if (message.ongoingHuntingPair)
            HuntingPair_1.HuntingPair.internalBinaryWrite(message.ongoingHuntingPair, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 next_refresh_time = 5; */
        if (message.nextRefreshTime !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.nextRefreshTime);
        /* uint32 city_id = 12; */
        if (message.cityId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.cityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetCityHuntingOfferRsp
 */
exports.GetCityHuntingOfferRsp = new GetCityHuntingOfferRsp$Type();
