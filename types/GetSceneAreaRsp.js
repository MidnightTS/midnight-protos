"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSceneAreaRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CityInfo_1 = require("./CityInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GetSceneAreaRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetSceneAreaRsp", [
            { no: 8, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "area_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "city_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CityInfo_1.CityInfo }
        ]);
    }
    create(value) {
        const message = { sceneId: 0, retcode: 0, areaIdList: [], cityInfoList: [] };
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
                case /* uint32 scene_id */ 8:
                    message.sceneId = reader.uint32();
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 area_id_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.areaIdList.push(reader.uint32());
                    else
                        message.areaIdList.push(reader.uint32());
                    break;
                case /* repeated CityInfo city_info_list */ 9:
                    message.cityInfoList.push(CityInfo_1.CityInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 scene_id = 8; */
        if (message.sceneId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.sceneId);
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 area_id_list = 15; */
        if (message.areaIdList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.areaIdList.length; i++)
                writer.uint32(message.areaIdList[i]);
            writer.join();
        }
        /* repeated CityInfo city_info_list = 9; */
        for (let i = 0; i < message.cityInfoList.length; i++)
            CityInfo_1.CityInfo.internalBinaryWrite(message.cityInfoList[i], writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetSceneAreaRsp
 */
exports.GetSceneAreaRsp = new GetSceneAreaRsp$Type();
